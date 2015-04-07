package com.mlnx.core;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;


/**
 * Banner entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="banner"
    ,catalog="mlnx"
)

public class Banner  implements java.io.Serializable {


    // Fields    

     private Integer bid;
     private String banImg;
     private String banSize;
     private Integer banStatus;


    // Constructors

    /** default constructor */
    public Banner() {
    }

    
    /** full constructor */
    public Banner(String banImg, String banSize, Integer banStatus) {
        this.banImg = banImg;
        this.banSize = banSize;
        this.banStatus = banStatus;
    }

   
    // Property accessors
    @Id @GeneratedValue(strategy=IDENTITY)
    
    @Column(name="bId", unique=true, nullable=false)

    public Integer getBid() {
        return this.bid;
    }
    
    public void setBid(Integer bid) {
        this.bid = bid;
    }
    
    @Column(name="banImg", length=50)

    public String getBanImg() {
        return this.banImg;
    }
    
    public void setBanImg(String banImg) {
        this.banImg = banImg;
    }
    
    @Column(name="banSize", length=50)

    public String getBanSize() {
        return this.banSize;
    }
    
    public void setBanSize(String banSize) {
        this.banSize = banSize;
    }
    
    @Column(name="banStatus")

    public Integer getBanStatus() {
        return this.banStatus;
    }
    
    public void setBanStatus(Integer banStatus) {
        this.banStatus = banStatus;
    }
   








}