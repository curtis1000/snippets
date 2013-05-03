<?php

/**
 * When you want your app to behave differently beyond a certain time, 
 * such as closing a contest at midnight, understand that time() returns
 * UTC time, and you should only compare it against another UTC time value. 
 * So here's an example where a contest closes at midnight EST (which happens
 * to be 4 hours behind UTC).
 */

        if (time() > strtotime("2013-05-01 4:00:00 UTC")) {
            // do your thang
        }
