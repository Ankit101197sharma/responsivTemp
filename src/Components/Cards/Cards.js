import React from 'react'
import { webData } from '../../DataFile';
import classes from "./Cards.module.css"

 function Cards() {
  return (
      <>
    <div style={{backgroundColor:'#292d33', width:'100%', height:'100%' , textAlign:'center'}}>
        <h1 className={classes.mainHeading}>Blog Posts</h1>
        <div className={classes.mainDiv}>
            
            {webData.map(item=>{
                return(
                    <div className={classes.imgGrid}>
                        <div className={classes.imgConatiner}>
                            <div className={classes.aCard}>
                                <img  className={classes.imgd} src={item.thumbnail} alt="" />
                                <h4 className={classes.title}><a href="/">{item.imgHeading}</a></h4>
                                <p className={classes.text}>{item.cardPara}</p>
                                <a className={classes.readBtn} href="/">{item.readMore}</a>

                            </div>

                        </div>
                    </div>
                )
            })}

        </div>
        <button className={classes.lBtn}>Learn More</button>

        <div >
            <footer className={classes.footer}>
                <div className={classes.footerDiv}>
                    <div style={{padding:"30px"}}>
                        <h4>Headline</h4>
                        <p>Sample footer text</p>
                    </div>
                    <div style={{padding:"30px"}}>
                    <h4>Headline</h4>
                        <p>Sample footer text</p>
                    </div >
                    <div style={{padding:"30px", textAlign:'left'}}>
                    <h4>Headline</h4>
                        <p>Sample footer text</p>
                    </div>
                </div>
            </footer>
    </div>
    <hr />
    </div>
    
  
  </>
  )
}
export default Cards;