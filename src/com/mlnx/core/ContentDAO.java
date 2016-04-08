package com.mlnx.core;

import java.util.List;
import org.hibernate.LockOptions;
import org.hibernate.Query;
import static org.hibernate.criterion.Example.create;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 	* A data access object (DAO) providing persistence and search support for Content entities.
 			* Transaction control of the save(), update() and delete() operations 
		can directly support Spring container-managed transactions or they can be augmented	to handle user-managed Spring transactions. 
		Each of these methods provides additional information for how to configure it for the desired type of transaction control. 	
	 * @see com.mlnx.core.Content
  * @author MyEclipse Persistence Tools 
 */
public class ContentDAO extends BaseHibernateDAO  {
	     private static final Logger log = LoggerFactory.getLogger(ContentDAO.class);
		//property constants
	public static final String CON_TITLE = "conTitle";
	public static final String CON_TEXT = "conText";
	public static final String CON_POSITION = "conPosition";
	public static final String CON_STATUS = "conStatus";



    
    public void save(Content transientInstance) {
        log.debug("saving Content instance");
        try {
            getSession().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
	public void delete(Content persistentInstance) {
        log.debug("deleting Content instance");
        try {
            getSession().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    public Content findById( java.lang.Integer id) {
        log.debug("getting Content instance with id: " + id);
        try {
            Content instance = (Content) getSession()
                    .get("com.mlnx.core.Content", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    public List<Content> findByExample(Content instance) {
        log.debug("finding Content instance by example");
        try {
            List<Content> results = (List<Content>) getSession()
                    .createCriteria("com.mlnx.core.Content")
                    .add( create(instance) )
            .list();
            log.debug("find by example successful, result size: " + results.size());
            return results;
        } catch (RuntimeException re) {
            log.error("find by example failed", re);
            throw re;
        }
    }    
    
    public List findByProperty(String propertyName, Object value) {
      log.debug("finding Content instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Content as model where model." 
         						+ propertyName + "= ?";
         Query queryObject = getSession().createQuery(queryString);
		 queryObject.setParameter(0, value);
		 return queryObject.list();
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}

	public List<Content> findByConTitle(Object conTitle
	) {
		return findByProperty(CON_TITLE, conTitle
		);
	}
	
	public List<Content> findByConText(Object conText
	) {
		return findByProperty(CON_TEXT, conText
		);
	}
	
	public List<Content> findByConPosition(Object conPosition
	) {
		return findByProperty(CON_POSITION, conPosition
		);
	}
	
	public List<Content> findByConStatus(Object conStatus
	) {
		return findByProperty(CON_STATUS, conStatus
		);
	}
	

	public List findAll() {
		log.debug("finding all Content instances");
		try {
			String queryString = "from Content";
	         Query queryObject = getSession().createQuery(queryString);
			 return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    public Content merge(Content detachedInstance) {
        log.debug("merging Content instance");
        try {
            Content result = (Content) getSession()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public void attachDirty(Content instance) {
        log.debug("attaching dirty Content instance");
        try {
            getSession().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    public void attachClean(Content instance) {
        log.debug("attaching clean Content instance");
        try {
                      	getSession().buildLockRequest(LockOptions.NONE).lock(instance);
          	            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
}