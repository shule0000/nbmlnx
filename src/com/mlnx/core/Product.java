package com.mlnx.core;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;


/**
 * Product entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="product"
    ,catalog="mlnx"
)

public class Product  implements java.io.Serializable {


    // Fields    

     private Integer pid;
     private String pduName;
     private String pduImg;
     private String pduSize;
     private String pduDetail;
     private Integer pduPriority;
     private Integer pduStatus;


    // Constructors

    /** default constructor */
    public Product() {
    }

    
    /** full constructor */
    public Product(String pduName, String pduImg, String pduSize, String pduDetail, Integer pduPriority, Integer pduStatus) {
        this.pduName = pduName;
        this.pduImg = pduImg;
        this.pduSize = pduSize;
        this.pduDetail = pduDetail;
        this.pduPriority = pduPriority;
        this.pduStatus = pduStatus;
    }

   
    // Property accessors
    @Id @GeneratedValue(strategy=IDENTITY)
    
    @Column(name="pId", unique=true, nullable=false)

    public Integer getPid() {
        return this.pid;
    }
    
    public void setPid(Integer pid) {
        this.pid = pid;
    }
    
    @Column(name="pduName", length=50)

    public String getPduName() {
        return this.pduName;
    }
    
    public void setPduName(String pduName) {
        this.pduName = pduName;
    }
    
    @Column(name="pduImg", length=50)

    public String getPduImg() {
        return this.pduImg;
    }
    
    public void setPduImg(String pduImg) {
        this.pduImg = pduImg;
    }
    
    @Column(name="pduSize", length=50)

    public String getPduSize() {
        return this.pduSize;
    }
    
    public void setPduSize(String pduSize) {
        this.pduSize = pduSize;
    }
    
    @Column(name="pduDetail", length=2000)

    public String getPduDetail() {
        return this.pduDetail;
    }
    
    public void setPduDetail(String pduDetail) {
        this.pduDetail = pduDetail;
    }
    
    @Column(name="pduPriority")

    public Integer getPduPriority() {
        return this.pduPriority;
    }
    
    public void setPduPriority(Integer pduPriority) {
        this.pduPriority = pduPriority;
    }
    
    @Column(name="pduStatus")

    public Integer getPduStatus() {
        return this.pduStatus;
    }
    
    public void setPduStatus(Integer pduStatus) {
        this.pduStatus = pduStatus;
    }
   








}