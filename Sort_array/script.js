import generateArray from "./generateArray";
import quickSort from "./Quicksort";
import mergeSort from "./mergeSort";
import insertionSort from "./insertionSort";
import selectionSort from "./selectionSort";
import bubbleSort from "./bubbleSort";

function executeSort(sortFn) {
    const t0 = performance.now();
    const array = generateArray(100000, 100000);
    sortFn(array);
    const t1 = performance.now();
    const time = `${t1 - t0} milliseconds.`
    console.log(time);
}

executeSort(quickSort);
executeSort(mergeSort);
executeSort(insertionSort);
executeSort(selectionSort);
executeSort(bubbleSort);
