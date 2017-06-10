<?php
$quotes = [ "quote_1.jpeg","quote_2.jpeg","quote_3.jpeg",
			"quote_4.jpg","quote_5.jpg","quote_6.png",
			"quote_7.jpg","quote_8.jpg","quote_9.jpeg"];
$imgDir = "https://enthusia.000webhostapp.com/images/quotes/";

$quote = new \stdClass();
$quote->Url =  $imgDir.$quotes[rand(0,count($quotes) - 1)];
echo json_encode($quote);

?>