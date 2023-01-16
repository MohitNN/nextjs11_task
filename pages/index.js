import Head from 'next/head'
import Image from 'next/image'
import Layout from '../component/layout/Layout_Comp'
import styles from '../styles/Home.module.css'
import Calendar from './calendar'
import HeaderComp from '../component/layout/HeaderComp'
import Sidebar from '../component/layout/Sidebar'
import FooterComp from '../component/layout/FooterComp'

export default function Home() {
  return (
   <>
  <HeaderComp/>
  <Sidebar/>
  <FooterComp/>
   {/* <Calendar/> */}
   </>
  ) 
}
