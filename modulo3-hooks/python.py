from pylatex import Document, Section, Subsection, Command, Package
from pylatex.utils import italic, NoEscape

# Create a new LaTeX document
doc = Document("Comparacao_QuickSort_CountingSort_Template", documentclass="article")
doc.preamble.append(Command('title', 'Comparação entre Quick Sort e Counting Sort'))
doc.preamble.append(Command('author', 'Filipe Exemplo'))
doc.preamble.append(Command('date', NoEscape(r'\today')))
doc.append(NoEscape(r'\maketitle'))

# Add required packages based on template standards
doc.packages.append(Package('babel', options='brazilian'))
doc.packages.append(Package('geometry'))
doc.packages.append(Package('graphicx'))

# Abstract and Resumo
with doc.create(Section('Resumo', numbering=False)):
    doc.append(
        "Este artigo analisa dois algoritmos clássicos de ordenação: Quick Sort e Counting Sort. "
        "Exploramos seus funcionamentos, complexidades, prós, contras e exemplos práticos. "
        "Além disso, analisamos gráficos que ilustram os desempenhos de ambos com tamanhos crescentes de arrays."
    )

# Add Introduction Section
with doc.create(Section('Introdução')):
    doc.append(
        "Os algoritmos de ordenação são ferramentas fundamentais em ciência da computação. "
        "Quick Sort e Counting Sort representam duas abordagens distintas: o primeiro utiliza o paradigma de divisão "
        "e conquista, enquanto o segundo é baseado em contagem direta de valores."
    )

# Quick Sort Section
with doc.create(Section('Quick Sort')):
    doc.append(
        "Quick Sort é um algoritmo eficiente que particiona recursivamente um array com base em um elemento pivô. "
        "Sua eficiência depende da escolha do pivô e do balanceamento dos subarrays."
    )
    with doc.create(Subsection('Complexidades')):
        doc.append(
            "- Melhor Caso: O(n log n), ocorre quando o pivô divide igualmente o array.\n"
            "- Caso Médio: O(n log n), é a complexidade típica com uma escolha aleatória de pivô.\n"
            "- Pior Caso: O(n²), ocorre em arrays já ordenados ou desbalanceados.\n"
        )
    with doc.create(Subsection('Prós e Contras')):
        doc.append(
            "Prós:\n- Geralmente eficiente para arrays grandes.\n- Requer espaço adicional mínimo.\n\n"
            "Contras:\n- Pode ser ineficiente sem otimizações.\n- Não é estável."
        )

# Counting Sort Section
with doc.create(Section('Counting Sort')):
    doc.append(
        "Counting Sort é um algoritmo não comparativo que utiliza contagem direta para ordenar elementos em um "
        "intervalo fixo. É eficiente para inteiros pequenos e em intervalos restritos."
    )
    with doc.create(Subsection('Complexidades')):
        doc.append(
            "- Todos os Casos: O(n + k), com n sendo o número de elementos e k o intervalo de valores.\n"
            "- Espaço Adicional: O(n + k), devido aos arrays auxiliares usados."
        )
    with doc.create(Subsection('Prós e Contras')):
        doc.append(
            "Prós:\n- Extremamente rápido para intervalos pequenos.\n- Estável, preservando a ordem dos elementos iguais.\n\n"
            "Contras:\n- Ineficiente para intervalos grandes.\n- Requer mais espaço."
        )

# Differences Section
with doc.create(Section('Diferenças e Análise dos Gráficos')):
    doc.append(
        "Os gráficos demonstram o comportamento esperado dos algoritmos. Quick Sort cresce exponencialmente com o tamanho "
        "do array, enquanto Counting Sort apresenta crescimento linear dependendo do intervalo. "
        "Quick Sort é versátil para qualquer tipo de dado, enquanto Counting Sort é restrito a inteiros com intervalos fixos."
    )
    doc.append(NoEscape(r'\newline \includegraphics[width=\textwidth]{space_for_graphs.png}'))

# Save to PDF
final_pdf_path_latex = "Comparacao_QuickSort_CountingSort_Revised.pdf"
doc.generate_pdf(filepath=final_pdf_path_latex.replace(".pdf", ""), clean_tex=True)
final_pdf_path_latex
