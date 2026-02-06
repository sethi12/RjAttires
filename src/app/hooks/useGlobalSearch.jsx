"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getProducts,
  getCategories,
  getBrands,
  getCollections,
} from "../../../services/client.service";

export function useGlobalSearch(query) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const [p, c, b, col] = await Promise.all([
        getProducts(),
        getCategories(),
        getBrands(),
        getCollections(),
      ]);

      setProducts(p || []);
      setCategories(c || []);
      setBrands(b || []);
      setCollections(col || []);
      setLoading(false);
    };

    fetchAll();
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const brandMap = useMemo(
    () => Object.fromEntries(brands.map(b => [b.id, b.name])),
    [brands]
  );

  const categoryMap = useMemo(
    () => Object.fromEntries(categories.map(c => [c.id, c.name])),
    [categories]
  );

  const collectionMap = useMemo(
    () => Object.fromEntries(collections.map(c => [c.id, c.name])),
    [collections]
  );

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    const match = (text, weight = 1) =>
      text?.toLowerCase().includes(normalizedQuery) ? weight : 0;

    return products
      .map(p => {
        const score =
          match(p.name, 5) +
          match(p.color, 2) +
          match(p.stitchedType, 2) +
          match(brandMap[p.brand], 4) +
          match(categoryMap[p.category], 3) +
          match(collectionMap[p.collection], 3);

        return score > 0
          ? {
              ...p,
              score,
              brandName: brandMap[p.brand],
              categoryName: categoryMap[p.category],
            }
          : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }, [normalizedQuery, products, brandMap, categoryMap, collectionMap]);

  return { results, loading };
}


/* UTIL */
export const formatName = (text) =>
  text
    ? text
        .split(" ")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";
