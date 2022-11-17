<?php

final class Naive
{
    public static function Main():void
    {
        $nums = [1, 1,1, 3, 4, 5];
        $target = 6;

        $expected = [0,2];

        $actual = (new Naive())->solution($nums, $target);
        var_dump($actual);
        echo assert(($expected[0] == $actual[0]) && ($expected[1] == $actual[1]));

    }

    public function solution(array $nums, int $target):array
    {
        $sum = 0;
        $ending_index=-1;
        $starting_index=-1;

        for ( $i=0; $i < sizeof( $nums ); $i++ ) {
        
            $sum = 0;
            for ( $j = $i; $j < sizeof( $nums ); $j++ ) {
                $sum += $nums[$j];

                if( ($target === $sum) && ( $j - $i > $ending_index - $starting_index )) {
                    $ending_index = $j;  $starting_index = $i;
                }
            }
        }
        return [ $starting_index, $ending_index ];
    }
}

Naive::Main();