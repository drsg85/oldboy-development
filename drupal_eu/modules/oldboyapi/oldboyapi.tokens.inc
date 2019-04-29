<?php
/**
 * https://michaeltroutt.com/custom-tokens-in-drupal-8/
 * https://opensenselabs.com/blogs/tech/how-create-custom-token-drupal-8
 * Implements hook_token_info().
 */
function oldboyapi_token_info() {
/*    $type = [*/
        //'name' => t('OldBoy Tokens'),
        //'description' => t('Tokens for custom things.'),
    //];

    //$node['template'] = [
        //'name' => t("Template folder"),
        //'description' => t('Current Template Folder'),
    //];

    //return [
        //'types' => ['oldboy' => $type],
        //'tokens' => ['oldboy' => $node],
    /*];*/


	$info = [];
	$info['types']['oldboy'] = ['name' => t('OldBoy Tokens'), 'description' => t('Tokens for custom things.')];
	$info['tokens']['oldboy']['template'][] = 'Current Template Folder';
	$info['tokens']['oldboy']['academy'][] = 'Academy Tpl banner';
	$info['tokens']['oldboy']['brabercount'][] = 'Brabershop Counter';
	$info['tokens']['oldboy']['braberplaces'][] = 'Brabershop _ in countries and _ cities';
	$info['tokens']['oldboy']['franchform'][] = 'New Franchize form';
	return $info;
}

function oldboyapi_get_template() {
	$result = '/'.\Drupal::theme()->getActiveTheme()->getPath();
	return $result;
}

function oldboyapi_render_block($machine_name) {
	$render = '';
	$block = \Drupal::entityTypeManager()
		->getStorage('block')
		->load($machine_name);
	if (!empty($block)) {
		$block_content = \Drupal::entityTypeManager()
			->getViewBuilder('block')
			->view($block);

		$pre_render = $block_content;

		$render = \Drupal::entityTypeManager()
			->getViewBuilder('block')
			->build($pre_render);
	}
	$html = \Drupal::service('renderer')->renderRoot($render);
	return $html;
}

/**
 * Implements hook_tokens().
 */
function oldboyapi_tokens($type, $tokens, array $data, array $options, \Drupal\Core\Render\BubbleableMetadata $bubbleable_metadata) {
    $replacements = [];
    
    if ($type == 'oldboy' /*&& !empty($data['node'])*/) {
		//error_log(var_export($tokens, true));
		//error_log(var_export(array_keys($data) ,true));
        foreach ($tokens as $name => $original) {
            switch ($name) {
                case 'template':
                    $replacements[$original] = oldboyapi_get_template();
				break;
                case 'academy':
                    $replacements[$original] = oldboyapi_render_block($name);
                break;
                case 'brabercount':
                    $replacements[$original] = oldboyapi_render_block($name);
                break;
                case 'braberplaces':
                    $replacements[$original] = oldboyapi_render_block($name);
                case 'franchform':
                    $replacements[$original] = oldboyapi_render_block($name);
                break;
            }
        }
/*        if ($dateTokens = \Drupal::token()->findWithPrefix($tokens, 'dateformat')) {*/
            //// var_dump($dateTokens)
            //// retult: array(1) { ["Y-m-d"]=> string(30) "[customtoken:dateformat:Y-m-d]" }
            //foreach ($dateTokens as $format => $original) {
                //$replacements[$original] = date($format);
            //}
        /*}*/
    }

	//error_log(var_export($replacements, true));
    return $replacements;
}
