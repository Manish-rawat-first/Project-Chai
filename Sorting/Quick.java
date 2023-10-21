import java.util.Arrays;

public class Quick {
    public static int Pivot(int arr[], int start, int end) {
        int pivot = arr[end];
        int ind = start - 1;
        for (int i = start; i < end; i++) {
            if (arr[i] < pivot) {
                ind++;
                int temp = arr[ind];
                arr[ind] = arr[i];
                arr[i] = temp;
            }

        }
        ind++;
        int temp = arr[ind];
        arr[ind] = arr[end];
        arr[end] = temp;
        return ind;

    }

    public static void partition(int arr[], int start, int end) {
        if (start < end) {
            int pivot = Pivot(arr, start, end);
            partition(arr, start, pivot - 1);
            partition(arr, pivot + 1, end);

        }

    }

    public static void main(String[] args) {
        int arr[] = { 43, 21, 90, 65, 43, 21, 1, -5, 3, -2, -1 };
        partition(arr, 0, arr.length - 1);
        System.out.print(Arrays.toString(arr));
    }

}
