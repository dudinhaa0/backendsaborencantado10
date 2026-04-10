// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================

let categorias = [
    { id: 1, nome: 'Pães' },
    { id: 2, nome: 'Salgados' },
    { id: 3, nome: 'Bebidas' },
    { id: 4, nome: 'Doces' }
];

let produtos = [
    // ─── PÃES ─────────────────────────
    {
        id: 1,
        categoriaId: 1,
        nome: 'Pão Francês',
        descricao: 'Pão tradicional crocante por fora e macio por dentro.',
        preco: 0.90,
        imagem: 'pao-frances.png'
    },
    {
        id: 2,
        categoriaId: 1,
        nome: 'Pão de Forma',
        descricao: 'Pão macio ideal para sanduíches.',
        preco: 8.50,
        imagem: 'pao-forma.png'
    },
    {
        id: 3,
        categoriaId: 1,
        nome: 'Pão Integral',
        descricao: 'Pão saudável feito com farinha integral.',
        preco: 9.50,
        imagem: 'pao-integral.png'
    },
    {
        id: 4,
        categoriaId: 1,
        nome: 'Baguete',
        descricao: 'Pão longo e crocante de origem francesa.',
        preco: 6.00,
        imagem: 'baguete.png'
    },

    // ─── SALGADOS ─────────────────────
    {
        id: 5,
        categoriaId: 2,
        nome: 'Coxinha de Frango',
        descricao: 'Salgado frito recheado com frango desfiado.',
        preco: 6.50,
        imagem: 'coxinha.png'
    },
    {
        id: 6,
        categoriaId: 2,
        nome: 'Pão de Queijo',
        descricao: 'Bolinha assada feita com queijo e polvilho.',
        preco: 4.50,
        imagem: 'pao-queijo.png'
    },
    {
        id: 7,
        categoriaId: 2,
        nome: 'Esfiha de Carne',
        descricao: 'Esfiha assada recheada com carne temperada.',
        preco: 5.50,
        imagem: 'esfiha-carne.png'
    },
    {
        id: 8,
        categoriaId: 2,
        nome: 'Empada de Frango',
        descricao: 'Empada assada recheada com frango cremoso.',
        preco: 7.00,
        imagem: 'empada-frango.png'
    },
    {
        id: 9,
        categoriaId: 2,
        nome: 'Pastel de Queijo',
        descricao: 'Pastel crocante recheado com queijo derretido.',
        preco: 6.00,
        imagem: 'pastel-queijo.png'
    },

    // ─── DOCES ────────────────────────
    {
        id: 10,
        categoriaId: 4,
        nome: 'Sonho de Creme',
        descricao: 'Pão doce recheado com creme e açúcar.',
        preco: 7.00,
        imagem: 'sonho.png'
    },
    {
        id: 11,
        categoriaId: 4,
        nome: 'Brigadeiro',
        descricao: 'Doce de chocolate coberto com granulado.',
        preco: 3.50,
        imagem: 'brigadeiro.png'
    },
    {
        id: 12,
        categoriaId: 4,
        nome: 'Bolo de Chocolate',
        descricao: 'Fatia de bolo de chocolate com cobertura.',
        preco: 8.00,
        imagem: 'bolo-chocolate.png'
    },
    {
        id: 13,
        categoriaId: 4,
        nome: 'Torta de Limão',
        descricao: 'Torta cremosa de limão com base crocante.',
        preco: 9.00,
        imagem: 'torta-limao.png'
    },

    // ─── BEBIDAS ──────────────────────
    {
        id: 14,
        categoriaId: 3,
        nome: 'Café Expresso',
        descricao: 'Café forte preparado na hora.',
        preco: 4.00,
        imagem: 'cafe-expresso.png'
    },
    {
        id: 15,
        categoriaId: 3,
        nome: 'Cappuccino',
        descricao: 'Café com leite vaporizado e chocolate.',
        preco: 6.50,
        imagem: 'cappuccino.png'
    },
    {
        id: 16,
        categoriaId: 3,
        nome: 'Suco de Laranja',
        descricao: 'Suco natural de laranja.',
        preco: 7.00,
        imagem: 'suco-laranja.png'
    },
    {
        id: 17,
        categoriaId: 3,
        nome: 'Refrigerante Lata',
        descricao: 'Refrigerante gelado em lata.',
        preco: 5.50,
        imagem: 'refrigerante.png'
    }
];

module.exports = { categorias, produtos };