
## Wordpress version

Wordpress version of the site.

### Note

To upload external links into the file system use:
```PHP
<?php echo get_bloginfo('template_directory'); ?>
```

For example, if one wants to link the file style.css then one would use, 
```PHP
<link href="<?php echo get_bloginfo('template_directory'); ?>/style.css" rel="stylesheet">
```
