import React from 'react';
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';



const Directory = ({ sections }) => {
    return <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size }) => {
            return <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        })}
    </div>

}

const mapStateToProps = createStructuredSelector(
    {
        sections: selectDirectorySections
    }
)

export default connect(mapStateToProps)(Directory);