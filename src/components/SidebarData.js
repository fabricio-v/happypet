import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Loja',
    path: '/shop',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Vendas',
        path: '/shop/sale',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Consulta Vendas',
        path: '/shop/consultationSale',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Agenda',
    path: '/schedule',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Criar Agendamento',
        path: '/schedule/scheduling',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Consulta Agendamento',
        path: '/schedule/consultationSchedule',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reagendar / Cancelar',
        path: '/schedule/cancelSchedule',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Cadastro',
    path: '/register',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pet´s',
        path: '/register/pet',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Serviços',
        path: '/register/services',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Usuarios',
        path: '/register/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Produtos',
        path: '/register/product',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Profissionais',
        path: '/register/professional',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];
