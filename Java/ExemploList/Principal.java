package Java.ExemploList;

import java.util.ArrayList;
import java.util.List;

public class Principal {

    public static void main(String[] args) {
        List<Pessoa> p1 = new ArrayList<>();
        p1.add(new Pessoa(1, "joao"));
        System.out.println(p1.indexOf(0));

        p1.add(new Pessoa(1, "joao"));
        p1.add(new Pessoa(1, "joao"));
        p1.add(new Pessoa(1, "joao"));

        for (Pessoa pessoa : p1) {
            System.out.println(pessoa.getNome());
        }

    }
}
