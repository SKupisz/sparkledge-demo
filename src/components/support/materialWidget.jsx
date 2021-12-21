import React from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { MaterialWidgetContainer, MaterialWidgetDataInfo, MaterialWidgetAudienceInfo, MaterialWidgetHeader,
    MaterialWidgetAuthor, MaterialWidgetCategoriesContainer, 
    MaterialWidgetCategorie, MaterialWidgetData, MaterialWidgetDataSpan } from "../../styled/materials.jsx";

const MaterialWidget = ({color="rgba(230,230,230,.8)", data}) => {

    const categoriesData = data["categories"].split(", ");

    return <MaterialWidgetContainer className="block-center" background={color}>
        <MaterialWidgetDataInfo>
            <MaterialWidgetHeader>
                {data["title"].length > 25 ? data["title"].substring(0,25)+"..." : data["title"]}
            </MaterialWidgetHeader>
            <MaterialWidgetAuthor>
                {data["author"]}
            </MaterialWidgetAuthor>
            <MaterialWidgetCategoriesContainer className="block-center">
                {categoriesData.map((elem, ind) => <MaterialWidgetCategorie key={data["id"]+"-categorie-"+ind}>
                    {elem}
                </MaterialWidgetCategorie>)}
            </MaterialWidgetCategoriesContainer>
        </MaterialWidgetDataInfo>
        <MaterialWidgetAudienceInfo>
            <MaterialWidgetData className="block-center" isdate="true">
                <CalendarTodayIcon style={{fontSize: "inherit"}}/>
                <MaterialWidgetDataSpan>{data["publishedOn"]}</MaterialWidgetDataSpan>
            </MaterialWidgetData>
            <MaterialWidgetData className="block-center">
                <VisibilityIcon style={{fontSize: "inherit"}}/>
                <MaterialWidgetDataSpan>{data["stats"]["views"]}</MaterialWidgetDataSpan>
            </MaterialWidgetData>
            <MaterialWidgetData className="block-center">
                <FavoriteIcon style={{fontSize: "inherit"}}/>
                <MaterialWidgetDataSpan>{data["stats"]["likes"]}</MaterialWidgetDataSpan>
            </MaterialWidgetData>
        </MaterialWidgetAudienceInfo>
    </MaterialWidgetContainer>
};

export default MaterialWidget;