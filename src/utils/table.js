const columns = [
  {
    title: '№',
    dataIndex: 'count',
    key: 'count',
    width: 46,
    fixed: 'left',
  },
  {
    title: 'Имя сотрудника',
    dataIndex: 'name',
    key: 'name',
    width: 202,
    fixed: 'left',
    sorter: (a, b) => {
      const nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA > nameB) 
        return -1
      if (nameA < nameB)
        return 1
      return 0 
      },
    sortDirections: ['descend'],
  },
  {
    title: 'Основная информация',
    children: [
      {
        title: 'ID номер',
        dataIndex: 'ID',
        key: 'ID',
        width: 98,
      },
      {
        title: 'Телефон',
        dataIndex: 'number',
        key: "number",
        width: 107 
      },
      {
        title: 'Пол',
        dataIndex: 'gender',
        key: "gender",
        width: 87,
        sorter: (a, b) => {
          const genderA=a.gender.toLowerCase(), genderB=b.gender.toLowerCase()
          if (genderA > genderB) 
            return -1
          if (genderA < genderB)
            return 1
          return 0 
          },
        sortDirections: ['descend'],
      },
      {
        title: 'Дата рождения',
        dataIndex: 'dateOfBirth',
        key: "dateOfBirth",
        width: 113,
      },
      {
        title: 'Метро',
        dataIndex: 'metro',
        key: "metro",
        width: 121,
        sorter: (a, b) => {
          const metroA=a.metro.toLowerCase(), metroB=b.metro.toLowerCase()
          if (metroA > metroB) 
            return -1
          if (metroA < metroB)
            return 1
          return 0 
          },
        sortDirections: ['descend'],
      },
      {
        title: 'Адрес проживания',
        dataIndex: 'address',
        key: "address",
        width: 183,
      },
    ],
  },
  {
    title: 'Банковская информация',
    children: [
      {
        title: 'Банк',
        dataIndex: 'bank',
        key: 'bank',
        width: 121,
      },
      {
        title: 'Номер карты',
        dataIndex: 'cardNumber',
        key: 'cardNumber',
        width: 137
      },
    ],
  },
  {
    title: 'Документы сотрудника',
    children: [
      {
        title: 'Гражданство',
        dataIndex: 'citizenship',
        key: 'citizenship',
        width: 118,
        sorter: (a, b) => {
          const citizenshipA=a.citizenship.toLowerCase(), citizenshipB=b.citizenship.toLowerCase()
          if (citizenshipA > citizenshipB) 
            return -1
          if (citizenshipA < citizenshipB)
            return 1
          return 0 
          },
        sortDirections: ['descend'],
      },
      {
        title: 'Паспорт',
        dataIndex: 'passport',
        key: 'passport',
        width: 105
      },
      {
        title: 'Кем выдан',
        dataIndex: 'issuedBy',
        key: 'issuedBy',
        width: 184
      },
      {
        title: 'Срок действия',
        dataIndex: 'validity',
        key: 'validity',
        width: 113
      },
      {
        title: 'Место рождения',
        dataIndex: 'placeOfBirth',
        key: 'placeOfBirth',
        width: 117
      },
      {
        title: 'Адрес прописки',
        dataIndex: 'placeOfResidence',
        key: 'placeOfResidence',
        width: 183
      },
      {
        title: 'Патент',
        dataIndex: 'patent',
        key: 'patent',
        width: 113,
        sorter: (a, b) => {
          const patentA=a.patent.toLowerCase(), patentB=b.patent.toLowerCase()
          if (patentA > patentB) 
            return -1
          if (patentA < patentB)
            return 1
          return 0 
          },
        sortDirections: ['descend'],
      },
      {
        title: 'Срок действия',
        dataIndex: 'validityDocuments',
        key: 'validityDocuments',
        width: 113
      },
      {
        title: 'СНИЛС',
        dataIndex: 'snils',
        key: 'snils',
        width: 137
      },
      {
        title: 'ИНН',
        dataIndex: 'inn',
        key: 'inn',
        width: 137
      },
      {
        title: 'Мед. книжка',
        dataIndex: 'medicalBook',
        key: 'medicalBook',
        width: 137
      },
    ],
  },
  {
    title: 'Информация от HR',
    children: [
      {
        title: 'Должность',
        dataIndex: 'position',
        key: 'position',
        width: 137,
        sorter: (a, b) => {
          const positionA=a.position.toLowerCase(), positionB=b.position.toLowerCase()
          if (positionA > positionB) 
            return -1
          if (positionA < positionB)
            return 1
          return 0 
          },
        sortDirections: ['descend'],
      },
      {
        title: 'Подразделение',
        dataIndex: 'subdivision',
        key: 'subdivision',
        width: 137,
        sorter: (a, b) => {
          const subdivisionA=a.subdivision.toLowerCase(), subdivisionB=b.subdivision.toLowerCase()
          if (subdivisionA > subdivisionB) 
            return -1
          if (subdivisionA < subdivisionB)
            return 1
          return 0 
          },
        sortDirections: ['descend'],
      },
      {
        title: 'Решение',
        dataIndex: 'decision',
        key: 'decision',
        width: 121,
        sorter: (a, b) => {
          const decisionA=a.decision.toLowerCase(), decisionB=b.decision.toLowerCase()
          if (decisionA > decisionB) 
            return -1
          if (decisionA < decisionB)
            return 1
          return 0 
          },
        sortDirections: ['descend'],
      },
      {
        title: 'Источник',
        dataIndex: 'source',
        key: 'source',
        width: 137,
      },
      {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        width: 114,
      },
      {
        title: 'Примечание',
        dataIndex: 'note',
        key: 'note',
        width: 202,
      },
    ],
  },
];

export default columns;