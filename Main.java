import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        int[] mynum ={3, 5, 5, 5,6,0,1,9,282,9};
    
        Scanner sc = new Scanner(System.in);
        System.out.print(">>>>>> ");
        String name = sc.nextLine();

        sc.close();


        System.out.println("HEYY " + name);


        int[] myArr = new int[10];
        

        log(mynum);
        
    }

    private static void log(int[] numbers)
    {
        for(int sfiso: numbers){
            System.out.println(sfiso);
        }
    }
}