<?php

    date_default_timezone_set('Asia/Saigon');
    //SQL info
    $config['hostDB'] = 'localhost';
    $config['nameDB'] = 'nutrition';
    $config['userDB'] = 'root';
    $config['passDB'] = '147896325';

    mysql_connect($config['hostDB'],$config['userDB'],$config['passDB']);
    mysql_select_db($config['nameDB']);
    mysql_query('SET NAMES "UTF8"');
?>