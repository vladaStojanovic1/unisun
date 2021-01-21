<?php $page_slug = 'home';
require_once(dirname(__FILE__) . '/_includes/_head/head_meta.php'); ?>

<body class="page-<?php echo $page_slug; ?>">
    <div id="page-content" class="page-content">
        <?php require_once(dirname(__FILE__) . '/_includes/_header/header-home.php'); ?>
        <?php require_once(dirname(__FILE__) . '/_includes/_footer/footer.php'); ?>
    </div>
</body>