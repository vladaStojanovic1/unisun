<?php
/**
 * @var $globalData {array} - Array of global data information (used for SEO, and across a website)
 */
$globalData = [
    'abr' => 'fsd',
    'abr_display' => 'fSD Website',
    'delimiter' => ' | ',
    'author' => 'fSD - Novi Sad',
    'theme_color' => '#7059fd'
];
$globalData['title_tag'] = $globalData['abr_display'];
/**
 * @var $pageData {array} - Array of specific page data, sorted in array. New page should have same keyword as here, so data is processed properly
 */
$pageData = [
    'home' => [
        'name' => 'Home',
        'title' => 'Page Title',
        'description' => 'Page Description',
    ],
    'about' => [
        'name' => 'About',
        'title' => 'Learn more about us',
        'description' => 'This is just simple about us page description',
    ]
];