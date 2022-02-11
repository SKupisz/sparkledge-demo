import React from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { MaterialWidgetContainer, MaterialWidgetDataInfo, MaterialWidgetAudienceInfo, MaterialWidgetHeader,
    MaterialWidgetAuthor, MaterialWidgetCategoriesContainer, 
    MaterialWidgetCategorie, MaterialWidgetData, MaterialWidgetDataSpan } from "../../styled/materialWidget.jsx";

const MaterialWidget = ({ismajor=true, color="rgba(230,230,230,.8)", data}) => {

    const categoriesData = data["categories"].split(", ");

    return <MaterialWidgetContainer className="block-center" background={color} ismajor={ismajor}>
        <MaterialWidgetDataInfo>
            <MaterialWidgetHeader ismajor={ismajor}>
                {data["title"].length > 25 ? data["title"].substring(0,25)+"..." : data["title"]}
            </MaterialWidgetHeader>
            {
                ismajor === true ? <>
                    <MaterialWidgetAuthor>
                        {data["author"]}
                    </MaterialWidgetAuthor>
                    <MaterialWidgetCategoriesContainer className="block-center">
                        {categoriesData.map((elem, ind) => <MaterialWidgetCategorie key={data["id"]+"-categorie-"+ind}>
                            {elem}
                        </MaterialWidgetCategorie>)}
                    </MaterialWidgetCategoriesContainer>
                </> : <></>
            }
        </MaterialWidgetDataInfo>
        <MaterialWidgetAudienceInfo>
            <MaterialWidgetData className={ismajor ? "block-center": ""} ismajor={ismajor} isdate="true">
                <CalendarTodayIcon style={{fontSize: "inherit"}}/>
                <MaterialWidgetDataSpan>{data["publishedOn"]}</MaterialWidgetDataSpan>
            </MaterialWidgetData>
            <MaterialWidgetData className={ismajor ? "block-center": ""} ismajor={ismajor}>
                <VisibilityIcon style={{fontSize: "inherit"}}/>
                <MaterialWidgetDataSpan>{data["stats"]["views"]}</MaterialWidgetDataSpan>
            </MaterialWidgetData>
            <MaterialWidgetData className={ismajor ? "block-center": ""} ismajor={ismajor}>
                <FavoriteIcon style={{fontSize: "inherit"}}/>
                <MaterialWidgetDataSpan>{data["stats"]["likes"]}</MaterialWidgetDataSpan>
            </MaterialWidgetData>
        </MaterialWidgetAudienceInfo>
    </MaterialWidgetContainer>
};

export default MaterialWidget;