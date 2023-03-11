import React, { useEffect, useState } from "react";
import { featureid } from "../../Types/featureid";

const FeaturedMovie = ({ item }: featureid) => {
  return (
    <section>
      <div>{item?.original_name} </div>
    </section>
  );
};

export default FeaturedMovie;
