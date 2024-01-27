<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'wordpress' );

/** Database hostname */
define( 'DB_HOST', 'database' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OiH;oQEx B{@uj+T,u:lPe792OI~|](YfpKHv?~C4iIA^U8W|FHs({=,sf[hA wP' );
define( 'SECURE_AUTH_KEY',  'Hn#OcLsW}u1o,CozxS:F9mIkd%U%xm.PbPmuh)wj5jr| vt{Cj.G}q @W[}EA3x:' );
define( 'LOGGED_IN_KEY',    'Jb*@7!NJc[N#Jw$o}SLC{A.Eq*3pi$)hh]M9W;}9.=5}xX Ov-P08o%CIkj2WySh' );
define( 'NONCE_KEY',        'S/53Z&-?r?ms*A!A1Wq#V4g]/Yd%W8I#W Q[jD21y{wx`)@=PS[+0;_|@O>{a$V;' );
define( 'AUTH_SALT',        '*ISq YI%5r5+{7V1zre*^n~c`DSIWIGj}L*?2>TS+T-uKUvC]b3@`&10)$hd794@' );
define( 'SECURE_AUTH_SALT', 'QH1]eZ/-}jS/|R^7WPf9nUOw=P1Es{v}_KJ<.z#$mi,?6x_#,`aVezPlQIF,|ARW' );
define( 'LOGGED_IN_SALT',   '{^ !wKU0d-?V]#Nly0#euxn1[!:SWi~oJx2p 4)g;B!_sk8[d]+FMKgEyy;|CbZW' );
define( 'NONCE_SALT',       '~&(n4X*G*.rGIt!nnV2?BR/G khHGL`-UOT$_WXxjm`r=^w$a?[^:OQ]|V|35BD}' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
