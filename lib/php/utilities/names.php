<?php

//This file includes all functions which deal with formatting names

function username_to_lastname ($name)

	{
		
		$query = $dbh->prepare("SELECT username,last_name FROM cm_users WHERE username = ? LIMIT 1");
		
		$query->bindParam(1,$name);
		
		$query->execute();

		$r = $query->fetch();

		return $r['last_name'];
		
		
	}
