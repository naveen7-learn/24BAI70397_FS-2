
import java.util.Scanner;

class Employee {
    private String name;
    private double basicSalary;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setBasicSalary(double basicSalary) {
        if (basicSalary > 0) {
            this.basicSalary = basicSalary;
        }
    }

    public double getBasicSalary() {
        return basicSalary;
    }

    public double calculateSalary() {
        return basicSalary;
    }
}

class PermanentEmployee extends Employee {
    @Override
    public double calculateSalary() {
        return getBasicSalary() * 1.20;
    }
}

class ContractEmployee extends Employee {
    @Override
    public double calculateSalary() {
        return getBasicSalary() * 1.10;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();
        sc.nextLine();

        while (t-- > 0) {
            String type = sc.nextLine(); 
            String name = sc.nextLine();
            double salary = sc.nextDouble();
            sc.nextLine();

            Employee e;

            if (type.equals("P")) {
                e = new PermanentEmployee();
            } else {
                e = new ContractEmployee();
            }

            e.setName(name);
            e.setBasicSalary(salary);

            System.out.println("Employee: " + e.getName());
            System.out.printf("Final Salary: %.2f%n", e.calculateSalary());
        }

        sc.close();
    }
}


