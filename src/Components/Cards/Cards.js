import React from 'react'
import { webData } from '../../DataFile';
import classes from "./Cards.module.css"

 function Cards() {
  return (
      <>
    <div className={classes.cards} >
        <h1 className={classes.mainHeading}>Blog Posts</h1>
        <div className={classes.mainDiv}>
            
            {webData.map(item=>{
                return(
                    <div className={classes.imgGrid}>
                        <div className={classes.imgConatiner}>
                            <div className={classes.aCard}>
                                <img  className={classes.imgd} src={item.thumbnail} alt="" />
                                <h4 className={classes.title}><a href="/">{item.imgHeading}</a></h4>
                                <p className={classes.para} >{item.cardPara}</p>
                                <a className={classes.readBtn} href="/">{item.readMore}</a>

                            </div>

                        </div>
                    </div>
                )
            })}

        </div>
        <button className={classes.lBtn}>Learn More</button>

        <div style={{paddingBottom:"30px"}} >
            <footer className={classes.footer}>
                <div className={classes.footerDiv}>
                    <div >
                        <h5>Headline</h5>
                        <p >Sample footer text</p>
                    </div>
                    <div >
                    <h5>Headline</h5>
                        <p>Sample footer text</p>
                    </div >
                    <div >
                    <h5>Headline</h5>
                        <p>Sample footer text</p>
                    </div>
                   
                </div>
                <div className={classes.hr}> 
                <hr />
                </div>
                <div >
                    <p  className={classes.para1}>Sample footer text</p>

                </div>
            </footer>
            
    </div>
    
    </div>
    
  
  </>
  )
}
export default Cards;