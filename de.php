<?php $page_slug = 'home-de';
require_once(dirname(__FILE__) . '/_includes/_head/head_meta.php'); ?>

<body class="page-<?php echo $page_slug; ?>">
    <div id="page-content" class="page-content">
        <?php require_once(dirname(__FILE__) . '/_includes/_header/header-home-de.php'); ?>
        <?php require_once(dirname(__FILE__) . '/_layouts/_sections/_de/section-experience-de.php'); ?>
        <?php require_once(dirname(__FILE__) . '/_layouts/_sections/_de/section-company-de.php'); ?>
        <?php require_once(dirname(__FILE__) . '/_layouts/_sections/_de/section-investment-de.php'); ?>
        <?php require_once(dirname(__FILE__) . '/_layouts/_sections/_de/section-contact-us-de.php'); ?>
        <?php require_once(dirname(__FILE__) . '/_includes/_footer/footer-de.php'); ?>
    </div>
</body>