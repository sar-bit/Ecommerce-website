import React, { Fragment } from "react";
import './MiniProductCardStyles.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



const MiniProductCard = ({productdetail,addProducttoCart}) => {
  
    const {image,title,price, description} = productdetail || {};
   
  return (
  <Card className="cardarea">
 <CardActionArea>
        <CardMedia
         className="productimg"
         image={image}
          title="Product"
        />
        <CardContent>
          <div className="cardtitle">
            {title.substring(0,20)}
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
          {description.substring(0,25)}
          </Typography>
          <div style={{display:'flex', marginTop:'5px', marginBottom:'5px'}}>
          <div className="pricelable">{price}$</div>
          <div className='carticon' onClick={()=>addProducttoCart({productdetail})}><AddShoppingCartIcon/></div>
          </div>
          
        </CardContent>
      </CardActionArea>
   
  </Card>
  );
};

export default React.memo(MiniProductCard);
