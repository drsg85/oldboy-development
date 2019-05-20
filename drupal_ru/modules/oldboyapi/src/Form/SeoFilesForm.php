<?php  
/**  
 * @file  
 * Contains Drupal\oldboyapi\Form\SeoFilesForm
 */  
namespace Drupal\oldboyapi\Form;  
use Drupal\Core\Form\ConfigFormBase;  
use Drupal\Core\Form\FormStateInterface;  

class SeoFilesForm extends ConfigFormBase {  
  /**  
   * {@inheritdoc}  
   */  
  protected function getEditableConfigNames() {  
    return [  
      'oldboyapi.seosettings',  
    ];  
  }  

  /**  
   * {@inheritdoc}  
   */  
  public function getFormId() {  
    return 'seofiles_form';  
  }

  /**  
   * {@inheritdoc}  
   */  
  public function buildForm(array $form, FormStateInterface $form_state) {  

    $config = $this->config('oldboyapi.seosettings');  

	$form = array_merge_recursive($form, array(
		'#title' => "SEO Files Uploader",
		'#attributes' => array('enctype' => 'multipart/form-data'),
	));

	$form['robots_txt_details'] = array(
      '#markup' => t('<b>Robots.txt</b>'),
    );

	$form['robots_txt'] = array(
		'#type'           => 'file',
		'#title'          => t('Choose a "robots.txt" file'),
		//'#title_display'  => 'invisible',
		'#theme_wrappers' => array(),
	);

	$form['sitemap_xml_details'] = array(
      '#markup' => t('<br><br><b>Sitemap.xml</b>'),
    );

	$form['sitemap_xml'] = array(
		'#type'           => 'file',
		'#title'          => t('Choose a "sitemap.xml" file'),
		//'#title_display'  => 'invisible',
		'#theme_wrappers' => array(),
	);

    return parent::buildForm($form, $form_state);  

  }


  /**  
   * {@inheritdoc}  
   */  
  public function submitForm(array &$form, FormStateInterface $form_state) {  
    parent::submitForm($form, $form_state);  

	$processFiles = array(
		'robots_txt' => '/robots.txt',
		'sitemap_xml' => '/sitemap.xml'
	);

	$all_files = $this->getRequest()->files->get('files', []);
	//error_log(var_export($all_files, true));
	foreach($processFiles as $id=>$to) {
		if (!isset($all_files[$id])) continue;
		$file = $all_files[$id];
		$file_path = $file->getRealPath();
		//error_log(var_export($file_path, true));
		if (file_exists($file_path)) {
			try {
				copy($file_path, $_SERVER['DOCUMENT_ROOT'].$to);
			} catch (\Exception $e) {
				$msg = $e->getMessage();
				drupal_set_message($msg, 'error');
			}
		}
	}

/*    $this->config('oldboyapi.seosettings')  */
      //->set('welcome_message', $form_state->getValue('welcome_message'))  
      /*->save();*/
  }  
}
