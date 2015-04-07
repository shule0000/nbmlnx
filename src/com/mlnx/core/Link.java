package com.mlnx.core;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;


/**
 * Link entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="link"
    ,catalog="mlnx"
)

public class Link  implements java.io.Serializable {


    // Fields    

     private Integer lid;
     private String linkName;
     private String linkUrl;
     private Integer linkStatus;


    // Constructors

    /** default constructor */
    public Link() {
    }

    
    /** full constructor */
    public Link(String linkName, String linkUrl, Integer linkStatus) {
        this.linkName = linkName;
        this.linkUrl = linkUrl;
        this.linkStatus = linkStatus;
    }

   
    // Property accessors
    @Id @GeneratedValue(strategy=IDENTITY)
    
    @Column(name="lId", unique=true, nullable=false)

    public Integer getLid() {
        return this.lid;
    }
    
    public void setLid(Integer lid) {
        this.lid = lid;
    }
    
    @Column(name="linkName", length=50)

    public String getLinkName() {
        return this.linkName;
    }
    
    public void setLinkName(String linkName) {
        this.linkName = linkName;
    }
    
    @Column(name="linkUrl", length=50)

    public String getLinkUrl() {
        return this.linkUrl;
    }
    
    public void setLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
    }
    
    @Column(name="linkStatus")

    public Integer getLinkStatus() {
        return this.linkStatus;
    }
    
    public void setLinkStatus(Integer linkStatus) {
        this.linkStatus = linkStatus;
    }
   








}