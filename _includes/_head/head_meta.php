<?php
require_once(dirname(__FILE__) . '/../../_lib/global_data.php');
global $globalData; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="author" content="<?php echo $globalData['author']; ?>">
    <meta name="theme-color" content="<?php echo $globalData['theme_color']; ?>" />
    <meta name="description" content="<?php echo  $pageData[$page_slug]['description']; ?>">

    <?php require_once(dirname(__FILE__) . '/head_assets.php'); ?>

    <title><?php echo $page_slug === 'home' ?  $globalData['abr_display'] . $globalData['delimiter'] . $pageData[$page_slug]['name'] 
    : $globalData['title_tag'] . $globalData['delimiter'] . $pageData[$page_slug]['name']; ?></title>
</head>