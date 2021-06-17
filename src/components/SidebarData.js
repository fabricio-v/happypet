import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from "react-icons/fc";


export const SidebarData = [
  {
    title: 'Loja',
    path: '/shop',
    icon: <FcIcons.FcShop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Vendas',
        path: '/shop/sale',
        icon: <FcIcons.FcMoneyTransfer />
      },
      {
        title: 'Consulta Vendas',
        path: '/shop/consultationSale',
        icon: <FcIcons.FcBullish />
      }
    ]
  },
  {
    title: 'Agenda',
    path: '/schedule',
    icon: <FcIcons.FcAddressBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Criar Agendamento',
        path: '/schedule/scheduling',
        icon: <FcIcons.FcPlanner />,
        cName: 'sub-nav'
      },
      {
        title: 'Consulta Agendamento',
        path: '/schedule/consultationSchedule',
        icon: <FcIcons.FcFinePrint />,
        cName: 'sub-nav'
      },
      {
        title: 'Cancelar Agendamento',
        path: '/schedule/cancelSchedule',
        icon: <FcIcons.FcLeave />
      }
    ]
  },
  {
    title: 'Cadastro',
    path: '/register',
    icon: <FcIcons.FcAddDatabase />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pet´s',
        path: '/register/pet',
        icon: <FcIcons.FcLinux />
      },
      {
        title: 'Serviços',
        path: '/register/services',
        icon: <FcIcons.FcServices />
      },
      {
        title: 'Usuarios',
        path: '/register/users',
        icon: <FcIcons.FcConferenceCall />
      },
      {
        title: 'Produtos',
        path: '/register/product',
        icon: <FcIcons.FcShipped />
      },
      {
        title: 'Profissionais',
        path: '/register/professional',
        icon: <FcIcons.FcManager />
      }
    ]
  }
];

