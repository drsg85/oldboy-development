<?php
namespace Drupal\oldboyapi\TwigExtension;

class SortBranches extends \Twig_Extension {    

	/**
	 *    * Generates a list of all Twig filters that this extension defines.
	 *       */
	public function getFilters() {
		return [
			new \Twig_SimpleFilter('sortBranches', array($this, 'sortBranches')),
			new \Twig_SimpleFilter('branchLetters', array($this, 'branchLetters')),
		];
	}

	/**
	 *    * Gets a unique identifier for this Twig extension.
	 *       */
	public function getName() {
		return 'oldboyapi.twig_extension';
	}

	/**
	 *    * Replaces all numbers from the string.
	 *       */


	
	public static function branchLetters($ar) {
		$result = array();
		$lastLetter = '';
		$lastCity = '';
		foreach($ar as $row) {
			$row['letter'] = '';
			$row['city'] = '';
			$row['city_nid'] = '';

			$cityName = self::_getBranchCityName($row);
			#$node = $a['content']['#row']->_entity;
			if ($cityName != $lastCity) {
				$row['city'] = $cityName;
				$row['city_nid'] = self::_getBranchCityNid($row);
				$lastCity = $cityName;
			}
			$letter = mb_substr($cityName, 0, 1);
			if ($letter != $lastLetter) {
				$row['letter'] = $letter;
				$lastLetter = $letter;
			}
			$result[] = $row;
		}
		return $result;
	}

	public static function _getBranchCityName($a) {
		$anode = $a['content']['#row']->_entity;
		$atitle = '';

		$titleVal = $anode->field_cityname->getValue();
		if (!empty($titleVal)) {
			$atitle = $titleVal[0]['value'];
		}

		if (!empty($anode->field_city->entity->title)) {
			$atitle = $anode->field_city->entity->title->value;
		}
		return $atitle;
	}

	public static function _getBranchCityNid($a) {
		$anode = $a['content']['#row']->_entity;
		$nid = $anode->nid;

		if (!empty($anode->field_city->entity)) {
			$nid = $anode->field_city->entity->nid;
		}
		if (!empty($nid)) {
			$nid = $nid->value;
		}
		return $nid;
	}

	public static function _sortBranches($a, $b) {
		$atitle = self::_getBranchCityName($a);
		$btitle = self::_getBranchCityName($b);
		$anode = $a['content']['#row']->_entity;
		$bnode = $b['content']['#row']->_entity;

		$result = $atitle > $btitle;
		if ($atitle == $btitle) {
			$abranch = $anode->title->value;
			$bbranch = $bnode->title->value;
			$result = $abranch > $bbranch;
		}

		return $result;
	}

	public static function sortBranches($ar) {
		usort($ar, array(__CLASS__, '_sortBranches'));
		return $ar;
	}

}


