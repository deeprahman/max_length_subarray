<?php

final class Optimized
{
    public static function main(){
        $nums = [1, 2, 3, 4, 5];
        $target = 10;

        var_dump( $actual = (new Optimized())->solution($nums, $target) );
    }
    
    public function solution( array $nums, int $target){
        $starting_index = -1;  $ending_index = -1;
        $map[0]=-1;
        $sum = 0;
        for ( $i = 0; $i < sizeof($nums); $i++ ) {
            $sum += $nums[$i];
            $map[ $sum ] = $i;
            var_dump($sum);
            if( isset( $map[ $sum - $target ] )   && ( ($ending_index - $starting_index) < $i -  $map[ $sum - $target ] ) ) {
                $starting_index = $map[ $sum - $target ] + 1;
                $ending_index = $i;
            }

        }
        return [$starting_index, $ending_index];
    }
}

Optimized::main();