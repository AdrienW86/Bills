import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Image from 'next/image'
import Logo from '../assets/pmn.png'

import styles from '../styles/Profil.module.css'

import {user} from '../data'

import { useState, useEffect } from 'react'

export default function profil() {

    const [ userProfil, setUserProfil ] = useState("")


    const fetchUserProfil = async () => {
        try {
            const response = await fetch('api/user/')
            const data = await response.json()
            setUserProfil(data)
            console.log(userProfil)
        }
        catch(error) {
            console.log(error)
        }

        useEffect(() => {
            fetchUserProfil()
        },[fetchUserProfil])

    }
  return (
  <>
    <Header />  
        <main className={styles.main} >
          <Nav /> 
            <div className={styles.container}>
                <section className={styles.header}>
                    <div className={styles.logo}>
                        <Image 
                            src={Logo}
                            height={100}
                            width={100}
                            alt='logo'
                        />
                    </div>
                    <div className={styles.infos}>
                        <h1 className={styles.name}>{user.name} </h1>
                            <div className={styles.status}>
                                <p className={styles.profit}> Chiffre d'affaire : <span style={{color: "green", marginLeft: "2px"}}> {user.profit} € </span></p>
                                <p className={styles.expenses}> Dépenses : <span style={{color: "red", marginLeft: "2px"}}> {user.expenses} € </span> </p>
                            </div>                                      
                    </div>              
                </section>
                <section className={styles.body}>
                    <p className={styles.p_infos}> SIRET : <span className={styles.span_infos}> {user.siret} </span></p>
                    <p className={styles.p_infos}> TVA : <span className={styles.span_infos}>{user.tva}% </span></p>
                    <p className={styles.p_infos}> ADRESSE : <span className={styles.span_infos}> {user.adress.number} {user.adress.street} </span> </p>
                    <p className={styles.p_infos}> VILLE : <span className={styles.span_infos}>{user.adress.city} {user.adress.zipcode} </span> </p>
                    <p className={styles.p_infos}> TELEPHONE : <span className={styles.span_infos}> {user.phone} </span> </p>
                    <p className={styles.p_infos}> EMAIL : <span className={styles.span_infos}> {user.email} </span> </p>
                </section>
                <section className={styles.box}>
                    <button className={styles.params}> Paramètres</button>
                </section>             
            </div>
        </main>
    <Footer />
  </>
  )
}