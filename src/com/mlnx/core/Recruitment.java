package com.mlnx.core;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;


/**
 * Recruitment entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="recruitment"
    ,catalog="mlnx"
)

public class Recruitment  implements java.io.Serializable {


    // Fields    

     private Integer rid;
     private String recruitPost;
     private String recruitDuty;
     private String recruitClaim;
     private Timestamp recruitTime;
     private Integer recruitStatus;


    // Constructors

    /** default constructor */
    public Recruitment() {
    }

    
    /** full constructor */
    public Recruitment(String recruitPost, String recruitDuty, String recruitClaim, Timestamp recruitTime, Integer recruitStatus) {
        this.recruitPost = recruitPost;
        this.recruitDuty = recruitDuty;
        this.recruitClaim = recruitClaim;
        this.recruitTime = recruitTime;
        this.recruitStatus = recruitStatus;
    }

   
    // Property accessors
    @Id @GeneratedValue(strategy=IDENTITY)
    
    @Column(name="rId", unique=true, nullable=false)

    public Integer getRid() {
        return this.rid;
    }
    
    public void setRid(Integer rid) {
        this.rid = rid;
    }
    
    @Column(name="recruitPost", length=50)

    public String getRecruitPost() {
        return this.recruitPost;
    }
    
    public void setRecruitPost(String recruitPost) {
        this.recruitPost = recruitPost;
    }
    
    @Column(name="recruitDuty", length=2000)

    public String getRecruitDuty() {
        return this.recruitDuty;
    }
    
    public void setRecruitDuty(String recruitDuty) {
        this.recruitDuty = recruitDuty;
    }
    
    @Column(name="recruitClaim", length=2000)

    public String getRecruitClaim() {
        return this.recruitClaim;
    }
    
    public void setRecruitClaim(String recruitClaim) {
        this.recruitClaim = recruitClaim;
    }
    
    @Column(name="recruitTime", length=19)

    public Timestamp getRecruitTime() {
        return this.recruitTime;
    }
    
    public void setRecruitTime(Timestamp recruitTime) {
        this.recruitTime = recruitTime;
    }
    
    @Column(name="recruitStatus")

    public Integer getRecruitStatus() {
        return this.recruitStatus;
    }
    
    public void setRecruitStatus(Integer recruitStatus) {
        this.recruitStatus = recruitStatus;
    }
   








}