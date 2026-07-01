# Reference Project Pages

筛选原则：优先选择经典、轻量、学术论文常用、可直接由 GitHub Pages 托管的页面；避免重型前端框架和营销式 landing page。

## Best Fit

1. Nerfies: https://nerfies.github.io/
   - 标准论文 project page 结构：标题、作者、机构、链接、abstract、视觉结果、BibTeX。
   - 页面源码开放，很多后续项目继承其版式。

2. NeRF: https://www.matthewtancik.com/nerf
   - 经典 CV/graphics project page，强调 teaser、method 图和结果展示。
   - 适合 PointLAM 这种需要先让读者看到 pipeline/效果的页面。

3. Point-NeRF: https://xharlie.github.io/projects/project_sites/pointnerf/
   - 同属 point-based 3D 表示方向，结构非常简单。
   - 有清晰的 abstract、pipeline、results、paper、BibTeX 分区。

4. Academic Project Page Template: https://github.com/eliahuhorwitz/Academic-project-page-template
   - 面向论文项目页，响应式、支持 GitHub Pages，包含 SEO、BibTeX、媒体模块。
   - 当前页面借鉴其信息层级，但没有直接引入模板代码。

5. Rich Zhang Webpage Template: https://github.com/richzhang/webpage-template
   - 老牌 ECCV 论文网页模板，纯 HTML，强调复制到 `gh-pages` 即可发布。
   - 适合作为部署和极简结构参考。

## Secondary References

6. 3D Gaussian Splatting: https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/
   - 经典 3D project page，结构短而完整：abstract、video/evaluation、visual comparisons、BibTeX。

7. mip-NeRF 360: https://jonbarron.info/mipnerf360/
   - 很紧凑的 academic page，标题、作者、链接、abstract、video、citation 即完成核心传播。

8. Articulated Point-NeRF: https://lukas.uzolas.com/Articulated-Point-NeRF/
   - 极简 3D/NeRF 页面，说明如何用少量段落串起 results 和 method。

9. Fourier Features: https://bmild.github.io/fourfeat/
   - 简单学术结构和方法解释参考。

10. DreamFusion: https://dreamfusion3d.github.io/
    - 视觉展示丰富，但部分 gallery 不适合 PointLAM 当前素材规模，因此只参考其章节顺序。

## Chosen Structure For PointLAM

- Hero: title, authors, affiliations, paper link, teaser.
- Abstract: one concise paragraph based on the paper abstract.
- Key ideas: LPS, LHA, LAM as three compact blocks.
- Architecture: main method figure.
- Results: three headline metrics plus short comparison note.
- Qualitative detection and feature visualization: use paper figures.
- BibTeX: camera-ready citation placeholder.
