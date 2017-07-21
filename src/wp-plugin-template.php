<?php
/*
 * Plugin Name: WP Plugin Template
 * Version: 1.0
 * Plugin URI: http://www.hughlashbrooke.com/
 * Description: This is your starter template for your next WordPress plugin.
 * Author: Hugh Lashbrooke
 * Author URI: http://www.hughlashbrooke.com/
 * Requires at least: 4.0
 * Tested up to: 4.0
 *
 * Text Domain: wp-plugin-template
 * Domain Path: /lang/
 *
 * @package WordPress
 * @author Hugh Lashbrooke
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Load plugin class files
require_once( 'includes/class-wp-plugin-template.php' );
require_once( 'includes/class-wp-plugin-template-settings.php' );

// Load plugin libraries
require_once( 'includes/lib/class-wp-plugin-template-admin-api.php' );
require_once( 'includes/lib/class-wp-plugin-template-post-type.php' );
require_once( 'includes/lib/class-wp-plugin-template-taxonomy.php' );

/**
 * Returns the main instance of WP_Plugin_Template to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object WP_Plugin_Template
 */
function WP_Plugin_Template () {
	$instance = WP_Plugin_Template::instance( __FILE__, '1.0.0' );

	if ( is_null( $instance->settings ) ) {
		$instance->settings = WP_Plugin_Template_Settings::instance( $instance );
	}

	return $instance;
}

WP_Plugin_Template();