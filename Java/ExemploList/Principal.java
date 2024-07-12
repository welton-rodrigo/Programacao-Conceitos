package Java.ExemploList;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Principal {

    public static void main(String[] args) {
        Pessoa p1 = new Pessoa(1, "fulano");
        Pessoa p2 = new Pessoa(1, "f2");

        List<Pessoa> pessoas;
        pessoas = new ArrayList<>();
        pessoas.add(new Pessoa(1, "joao"));
        pessoas.add(p1);
        pessoas.add(p1);
        for (Pessoa pessoa : pessoas) {
            System.out.println(pessoa.getId() + pessoa.getNome());
        }
        System.out.println("-----------------------------");
        Set<Pessoa> setPessoas;
        setPessoas = new HashSet<Pessoa>();
        setPessoas.add(p1);
        setPessoas.add(p1);
        setPessoas.add(p2);

        for (Pessoa pessoa : setPessoas) {
            System.out.println(pessoa.getId() + pessoa.getNome());

        }
        System.out.println("-----------------------------");

    }
}
