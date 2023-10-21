import java.util.*;

public class Merge {
    public static void partition(int array[], int start, int end) {
        if (start < end) {
            int mid = (start + end) / 2;
            partition(array, start, mid);
            partition(array, mid + 1, end);
            merge(array, start, mid, end);
        }
    }

    public static void merge(int array[], int start, int mid, int end) {
        int help[] = new int[end - start + 1];
        int idx = start;
        int idx2 = mid + 1;
        int ind = 0;
        while (idx <= mid && idx2 <= end) {
            help[ind++] = (array[idx] < array[idx2]) ? array[idx++] : array[idx2++];
        }
        while (idx <= mid) {
            help[ind++] = array[idx++];
        }
        while (idx2 <= end) {
            help[ind++] = array[idx2++];
        }
        for(int i:help){
            array[start++] = i;
        }

    }

    public static void main(String args[]) {
        int array[] = { 12, 34, -1, 2, 1, 9, 5, 3, 1, -87 };
        partition(array, 0, array.length - 1);
        System.out.print(Arrays.toString(array));
    }
}