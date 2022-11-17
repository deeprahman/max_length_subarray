
    export class Naive
    {
        /**
         * Naive function to find the maximum length subarray with sum `s` present in a given array
         * @param nums number[] Array of integer
         * @param s number  sum of items in the subarray
         */
        public static findMaxLenSubarray(nums: number[], s: number):void
        {
            // `len` stores the maximum length of subarray with sum `s`
            let len=0;

            // stores the ending index of the maximum length subarray having sum `s`
            let ending_index=-1;

            // Consider all the subarray starting from `i`
            for(let i=0; i < nums.length; i++){
                let target=0;
                
                // Consider all the subarray ending with `j`
                for(let j=i; j<nums.length; j++){
                    // sum of all elements in the current subarray
                    target += nums[j];

                    // if we have hound a subarray with sum `s`
                    if(target == s){
                        // update the length and ending index of maximum length subarray
                        if(len<j-i+1){
                            len=j-i+1;
                            ending_index=j;
                        }
                    }
                }
            }
            console.log("len is: "+len);
            console.log("ending index is: "+ending_index);
            this.printSubarray(nums,ending_index-len+1,ending_index);
        }

        private static printSubarray(nums:number[], start:number, end:number):void{
            console.log(nums.slice(start, end+1));
        }
    }

    const nums: number[] = [1,2,3,4,5,6,7,8];

const sum = 10;

Naive.findMaxLenSubarray(nums,sum);
