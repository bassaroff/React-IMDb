import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { RiMovieFill } from 'react-icons/ri'
import { MdForum } from 'react-icons/md'
import { IoPeopleCircleSharp, IoTvSharp } from 'react-icons/io5'

const SidebarData = [
    {
        title: 'Home',
        url: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Movies',
        url: '/movies',
        icon: <RiMovieFill/>,
        cName: 'nav-text'
    },
    {
        title: 'TV Shows',
        url: '/tvs',
        icon: <IoTvSharp/>,
        cName: 'nav-text'
    },
    {
        title: 'Awards & Events',
        url: '/awards',
        icon: <FaIcons.FaAward/>,
        cName: 'nav-text'
    },
    {
        title: 'Celebs',
        url: '/celebs',
        icon: <IoPeopleCircleSharp/>,
        cName: 'nav-text'
    },
    {
        title: 'Watch',
        url: '/watch',
        icon: <RiMovieFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Community',
        url: '/community',
        icon: <MdForum/>,
        cName: 'nav-text'
    },
]
export default SidebarData