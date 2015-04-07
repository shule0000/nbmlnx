package com.mlnx.core;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;


/**
 * Content entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="content"
    ,catalog="mlnx"
)

public class Content  implements java.io.Serializable {


    // Fields    

     private Integer cid;
     private String conTitle;
     private String conText;
     private Integer conPosition;
     private Integer conStatus;


    // Constructors

    /** default constructor */
    public Content() {
    }

    
    /** full constructor */
    public Content(String conTitle, String conText, Integer conPosition, Integer conStatus) {
        this.conTitle = conTitle;
        this.conText = conText;
        this.conPosition = conPosition;
        this.conStatus = conStatus;
    }

   
    // Property accessors
    @Id @GeneratedValue(strategy=IDENTITY)
    
    @Column(name="cId", unique=true, nullable=false)

    public Integer getCid() {
        return this.cid;
    }
    
    public void setCid(Integer cid) {
        this.cid = cid;
    }
    
    @Column(name="conTitle", length=50)

    public String getConTitle() {
        return this.conTitle;
    }
    
    public void setConTitle(String conTitle) {
        this.conTitle = conTitle;
    }
    
    @Column(name="conText", length=2000)

    public String getConText() {
        return this.conText;
    }
    
    public void setConText(String conText) {
        this.conText = conText;
    }
    
    @Column(name="conPosition")

    public Integer getConPosition() {
        return this.conPosition;
    }
    
    public void setConPosition(Integer conPosition) {
        this.conPosition = conPosition;
    }
    
    @Column(name="conStatus")

    public Integer getConStatus() {
        return this.conStatus;
    }
    
    public void setConStatus(Integer conStatus) {
        this.conStatus = conStatus;
    }
   








}