export class Optimized
{
    public static main():void{
        const nums = [4, 8, 2, -1, 1, -1, 1, 1, -1, 1, -1, 1,1,1,1,1,1,1,1,-1,-1];
        const target = 8;

        let ret:number[];
        ret = (new Optimized()).solution(nums, target);

        console.log(nums.slice(ret[0], ret[1] + 1));
    }

    /**
     * Finds the longest subarray that constitutes the given target number
     * @param nums 
     * @param target 
     * @returns 
     */
    public solution(nums:number[], target:number):number[]{
        let starting_index = -1;
        let ending_index = -1;
        let sum = 0;
        let key:number;
        const map = new Map();
        map.set(0,-1);

        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
            map.set(sum,i);
            key = sum - target;
            if( map.has(key) && ( i - map.get(key) > ending_index - starting_index ) ){
                starting_index = map.get(key) + 1;
                ending_index = i;
            }
        }

        let ret = new Array();
        ret.push(starting_index);
        ret.push(ending_index);
        console.log(ret);
        return ret;

    }
}

Optimized.main();