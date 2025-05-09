/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function seed(knex) {
  await knex('exames').del()
  await knex('exames').insert([
    {
      "id": 1,
      "nome": "Hemograma Completo",
      "especialidade": ["Clínica Geral", "Hematologia"]
    },
    {
      "id": 2,
      "nome": "Eletrocardiograma (ECG)",
      "especialidade": ["Cardiologia"]
    },
    {
      "id": 3,
      "nome": "Ressonância Magnética (RM)",
      "especialidade": ["Radiologia", "Neurologia", "Ortopedia"]
    },
    {
      "id": 4,
      "nome": "Tomografia Computadorizada (TC)",
      "especialidade": ["Radiologia"]
    },
    {
      "id": 5,
      "nome": "Ultrassonografia (USG)",
      "especialidade": ["Ginecologia", "Obstetrícia", "Urologia", "Radiologia"]
    },
    {
      "id": 6,
      "nome": "Colesterol Total e Frações (HDL, LDL, VLDL)",
      "especialidade": ["Endocrinologia", "Clínica Geral"]
    },
    {
      "id": 7,
      "nome": "Glicemia de Jejum",
      "especialidade": ["Endocrinologia"]
    },
    {
      "id": 8,
      "nome": "Teste Ergométrico (Esteira)",
      "especialidade": ["Cardiologia"]
    },
    {
      "id": 9,
      "nome": "Endoscopia Digestiva Alta",
      "especialidade": ["Gastroenterologia"]
    },
    {
      "id": 10,
      "nome": "Colonoscopia",
      "especialidade": ["Gastroenterologia"]
    },
    {
      "id": 11,
      "nome": "Exame de Papanicolau (Colpocitologia Oncótica)",
      "especialidade": ["Ginecologia"]
    },
    {
      "id": 12,
      "nome": "Mamografia",
      "especialidade": ["Ginecologia", "Mastologia"]
    },
    {
      "id": 13,
      "nome": "Espermograma",
      "especialidade": ["Urologia", "Andrologia"]
    },
    {
      "id": 14,
      "nome": "Exame de TSH e T4 Livre",
      "especialidade": ["Endocrinologia"]
    },
    {
      "id": 15,
      "nome": "Raio-X de Tórax",
      "especialidade": ["Pneumologia", "Radiologia"]
    }
  ]
  )
}
