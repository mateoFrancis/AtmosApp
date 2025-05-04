SET foreign_key_checks = 0;

source ./tables.sql;
source ./procedures.sql;

Show tables;

--\! php ./public_html/Project_Jarf/tools.php

SET foreign_key_checks = 1;