/* Copyright© 2000 - 2019 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/
import {
    SuperMap,
    DataFormat,
    ServerType,
    GeometryType,
    QueryOption,
    JoinType,
    EngineType,
    MeasureMode,
    SpatialRelationType,
    DataReturnMode,
    Unit,
    BufferRadiusUnit,
    SpatialQueryMode,
    ThemeGraphTextFormat,
    ThemeGraphType,
    GraphAxesTextDisplayMode,
    GraduatedMode,
    RangeMode,
    ThemeType,
    ColorGradientType,
    TextAlignment,
    FillGradientMode,
    SideType,
    AlongLineDirection,
    LabelBackShape,
    LabelOverLengthMode,
    DirectionType,
    OverlayOperationType,
    SupplyCenterType,
    TurnType,
    BufferEndType,
    SmoothMethod,
    SurfaceAnalystMethod,
    ColorSpaceType,
    ChartType,
    EditType,
    TransferTactic,
    TransferPreference,
    GridType,
    ClientType,
    LayerType,
    UGCLayerType,
    StatisticMode,
    PixelFormat,
    SearchMode,
    SummaryType,
    InterpolationAlgorithmType,
    VariogramMode,
    Exponent,
    ClipAnalystMode,
    AnalystAreaUnit,
    AnalystSizeUnit,
    StatisticAnalystMode,
    TopologyValidatorRule,
    OutputType,
    AggregationQueryBuilderType,
    AggregationType,
    GetFeatureMode,
    //control
    TimeFlowControl,
    //iManager
    IManager,
    IManagerServiceBase,
    IManagerCreateNodeParam,
    //iPortal
    IPortal,
    IPortalQueryParam,
    IPortalResource,
    IPortalQueryResult,
    IPortalShareParam,
    IPortalShareEntity,
    IPortalMap,
    IPortalMapsQueryParam,
    IPortalInsight,
    IPortalInsightsQueryParam,
    IPortalScene,
    IPortalScenesQueryParam,
    IPortalService,
    IPortalServiceBase,
    IPortalServicesQueryParam,
    IPortalMapdashboard,
    IPortalMapdashboardsQueryParam,
    //Online
    Online,
    OnlineData,
    OnlineQueryDatasParameter,
    ServiceStatus,
    DataItemType,
    DataItemOrderBy,
    FilterField,
    OnlineServiceBase,
    //security
    KeyServiceParameter,
    SecurityManager,
    ServerInfo,
    TokenServiceParameter,
    //thirdparty
    ElasticSearch,
    //util
    FetchRequest,
    ColorsPickerUtil,
    ArrayStatistic,
    //iServer
    AreaSolarRadiationParameters,
    AggregationParameter,
    AggQueryBuilderParameter,
    BufferAnalystParameters,
    BufferDistance,
    BuffersAnalystJobsParameter,
    BufferSetting,
    BurstPipelineAnalystParameters,
    ChartQueryFilterParameter,
    ChartQueryParameters,
    ClipParameter,
    ColorDictionary,
    ComputeWeightMatrixParameters,
    DataReturnOption,
    DatasetBufferAnalystParameters,
    DatasetInfo,
    DatasetOverlayAnalystParameters,
    DatasetSurfaceAnalystParameters,
    DatasetThiessenAnalystParameters,
    DatasourceConnectionInfo,
    DensityKernelAnalystParameters,
    EditFeaturesParameters,
    FacilityAnalyst3DParameters,
    FacilityAnalystSinks3DParameters,
    FacilityAnalystSources3DParameters,
    FacilityAnalystStreamParameters,
    FacilityAnalystTracedown3DParameters,
    FacilityAnalystTraceup3DParameters,
    FacilityAnalystUpstream3DParameters,
    FilterAggParameter,
    FieldParameters,
    FieldStatisticsParameters,
    FilterParameter,
    FindClosestFacilitiesParameters,
    FindLocationParameters,
    FindMTSPPathsParameters,
    FindPathParameters,
    FindServiceAreasParameters,
    FindTSPPathsParameters,
    GenerateSpatialDataParameters,
    GeoBoundingBoxQueryBuilderParameter,
    GeoCodingParameter,
    GeoDecodingParameter,
    GeoHashGridAggParameter,
    GeometryBufferAnalystParameters,
    GeometryOverlayAnalystParameters,
    GeometrySurfaceAnalystParameters,
    GeometryThiessenAnalystParameters,
    GeoRelationAnalystParameters,
    GetFeaturesByBoundsParameters,
    GetFeaturesByBufferParameters,
    GetFeaturesByGeometryParameters,
    GetFeaturesByIDsParameters,
    GetFeaturesBySQLParameters,
    GetGridCellInfosParameters,
    Grid,
    Image,
    InterpolationAnalystParameters,
    InterpolationIDWAnalystParameters,
    InterpolationKrigingAnalystParameters,
    InterpolationRBFAnalystParameters,
    JoinItem,
    KernelDensityJobParameter,
    LabelImageCell,
    LabelMatrixCell,
    LabelMixedTextStyle,
    LabelSymbolCell,
    LabelThemeCell,
    LayerStatus,
    LinkItem,
    MathExpressionAnalysisParameters,
    MeasureParameters,
    OutputSetting,
    MappingParameters,
    OverlapDisplayedOptions,
    OverlayAnalystParameters,
    OverlayGeoJobParameter,
    PointWithMeasure,
    QueryByBoundsParameters,
    QueryByDistanceParameters,
    QueryByGeometryParameters,
    QueryBySQLParameters,
    QueryParameters,
    Route,
    RouteCalculateMeasureParameters,
    RouteLocatorParameters,
    ServerColor,
    ServerFeature,
    ServerGeometry,
    ServerStyle,
    ServerTextStyle,
    ServerTheme,
    SetLayerInfoParameters,
    SetLayersInfoParameters,
    SetLayerStatusParameters,
    SingleObjectQueryJobsParameter,
    StopQueryParameters,
    SummaryAttributesJobsParameter,
    SummaryMeshJobParameter,
    SummaryRegionJobParameter,
    SupplyCenter,
    SurfaceAnalystParameters,
    SurfaceAnalystParametersSetting,
    TerrainCurvatureCalculationParameters,
    Theme,
    ThemeDotDensity,
    ThemeFlow,
    ThemeGraduatedSymbol,
    ThemeGraduatedSymbolStyle,
    ThemeGraph,
    ThemeGraphAxes,
    ThemeGraphItem,
    ThemeGraphSize,
    ThemeGraphText,
    ThemeGridRange,
    ThemeGridRangeItem,
    ThemeGridUnique,
    ThemeGridUniqueItem,
    ThemeLabel,
    ThemeLabelAlongLine,
    ThemeLabelBackground,
    ThemeLabelItem,
    ThemeLabelText,
    ThemeLabelUniqueItem,
    ThemeMemoryData,
    ThemeOffset,
    ThemeParameters,
    ThemeRange,
    ThemeRangeItem,
    ThemeUnique,
    ThemeUniqueItem,
    ThiessenAnalystParameters,
    TopologyValidatorJobsParameter,
    TransferLine,
    TransferPathParameters,
    TransferSolutionParameters,
    TransportationAnalystParameter,
    TransportationAnalystResultSetting,
    UGCLayer,
    UGCMapLayer,
    UGCSubLayer,
    UpdateEdgeWeightParameters,
    UpdateTurnNodeWeightParameters,
    Vector,
    VectorClipJobsParameter,
    //components
    FileTypes,
    FileConfig,
    FileModel,
    MessageBox,
    CommonContainer,
    DropDownBox,
    Select,
    AttributesPopContainer,
    PopContainer,
    IndexTabsPageContainer,
    CityTabsPage,
    NavTabsPage,
    PaginationContainer,
    ComponentsUtil,
    FileReaderUtil,
    ChartView,
    ChartViewModel

} from '@supermap/iclient-common';

import {
    Logo,
    logo,
    ChangeTileVersion,
    changeTileVersion
} from './control';

import {
    CommontypesConversion,
    BaiduCRS,
    TianDiTu_WGS84CRS,
    TianDiTu_MercatorCRS,
    NonProjection,
    nonProjection,
    NonEarthCRS,
    nonEarthCRS,
    CRS,
    crs,
    toGeoJSON,
    toSuperMapGeometry,
    getMeterPerMapUnit,
    resolutionToScale,
    scaleToResolution,
    GetResolutionFromScaleDpi,
    NormalizeScale
} from './core';
import {
    BaiduTileLayer,
    baiduTileLayer,
    CloudTileLayer,
    cloudTileLayer,
    ImageMapLayer,
    imageMapLayer,
    TiandituTileLayer,
    tiandituTileLayer,
    TiledMapLayer,
    tiledMapLayer,
    WMTSLayer,
    wmtsLayer,
    WebMap,
    webMap
} from './mapping';
import {
    DataFlowLayer,
    dataFlowLayer,
    EchartsLayer,
    echartsLayer,
    LeafletMapCoordSys,
    GraphicLayer,
    graphicLayer,
    GraphThemeLayer,
    graphThemeLayer,
    LabelThemeLayer,
    labelThemeLayer,
    MapVLayer,
    mapVLayer,
    RangeThemeLayer,
    rangeThemeLayer,
    RankSymbolThemeLayer,
    rankSymbolThemeLayer,
    TileVectorLayer,
    tiledVectorLayer,
    TurfLayer,
    turfLayer,
    UnicodeMarker,
    unicodeMarker,
    UniqueThemeLayer,
    uniqueThemeLayer,
    VectorTileFormat,

    CartoCSSToLeaflet,
    DefaultStyle,
    CartoStyleMap,
    ServerStyleMap,
    CompOpMap,

    ImageStyle,
    imageStyle,
    CircleStyle,
    circleStyle,
    Graphic,
    graphic,
    CloverStyle,
    cloverStyle,
    MapVRenderer,
    GeoFeatureThemeLayer,
    ThemeFeature,
    themeFeature,
    ThemeLayer,

    CanvasRenderer,
    LineSymbolizer,
    PointSymbolizer,
    RegionSymbolizer,
    SVGRenderer,
    Symbolizer,
    PolyBase,
    TextSymbolizer,
    VectorFeatureType,
    VectorGrid,
    VectorTile,
    VectorTileJSON,
    VectorTilePBF
} from './overlay';
import {
    AddressMatchService,
    addressMatchService,
    ChartService,
    chartService,
    DataFlowService,
    dataFlowService,
    FeatureService,
    featureService,
    FieldService,
    fieldService,
    GridCellInfosService,
    gridCellInfosService,
    LayerInfoService,
    layerInfoService,
    MapService,
    mapService,
    MeasureService,
    measureService,
    NetworkAnalyst3DService,
    networkAnalyst3DService,
    NetworkAnalystService,
    networkAnalystService,
    ProcessingService,
    processingService,
    QueryService,
    queryService,
    ServiceBase,
    SpatialAnalystService,
    spatialAnalystService,
    ThemeService,
    themeService,
    TrafficTransferAnalystService,
    trafficTransferAnalystService
} from './services';

import {
    OpenFileView,
    openFileView,
    OpenFileViewModel,
    openFileViewModel,
    SearchView,
    searchView,
    DataFlowView,
    dataFlowView,
    ClientComputationView,
    clientComputationView,
    ClientComputationViewModel,
    ClientComputationLayer,
    clientComputationLayer,
    GeoJSONLayerWithName,
    geoJSONLayerWithName,
    GeoJsonLayersDataModel,
    GeoJsonLayerDataModel,
    DistributedAnalysisView,
    distributedAnalysisView,
    DistributedAnalysisViewModel,
    DataServiceQueryView,
    dataServiceQueryView,
    DataServiceQueryViewModel,
    dataServiceQueryViewModel
} from './components';

export {
    OpenFileView,
    openFileView,
    OpenFileViewModel,
    openFileViewModel,
    SearchView,
    searchView,
    DataFlowView,
    dataFlowView,
    clientComputationView,
    ClientComputationView,
    ClientComputationViewModel,
    ClientComputationLayer,
    clientComputationLayer,
    GeoJSONLayerWithName,
    geoJSONLayerWithName,
    GeoJsonLayersDataModel,
    GeoJsonLayerDataModel,
    DistributedAnalysisView,
    distributedAnalysisView,
    DistributedAnalysisViewModel,
    DataServiceQueryView,
    dataServiceQueryView,
    DataServiceQueryViewModel,
    dataServiceQueryViewModel
}

export {
    SuperMap,
    DataFormat,
    ServerType,
    GeometryType,
    QueryOption,
    JoinType,
    EngineType,
    MeasureMode,
    SpatialRelationType,
    DataReturnMode,
    Unit,
    BufferRadiusUnit,
    SpatialQueryMode,
    ThemeGraphTextFormat,
    ThemeGraphType,
    GraphAxesTextDisplayMode,
    GraduatedMode,
    RangeMode,
    ThemeType,
    ColorGradientType,
    TextAlignment,
    FillGradientMode,
    SideType,
    AlongLineDirection,
    LabelBackShape,
    LabelOverLengthMode,
    DirectionType,
    OverlayOperationType,
    SupplyCenterType,
    TurnType,
    BufferEndType,
    SmoothMethod,
    SurfaceAnalystMethod,
    ColorSpaceType,
    ChartType,
    EditType,
    TransferTactic,
    TransferPreference,
    GridType,
    ClientType,
    LayerType,
    UGCLayerType,
    StatisticMode,
    PixelFormat,
    SearchMode,
    SummaryType,
    InterpolationAlgorithmType,
    VariogramMode,
    Exponent,
    ClipAnalystMode,
    AnalystAreaUnit,
    AnalystSizeUnit,
    StatisticAnalystMode,
    TopologyValidatorRule,
    OutputType,
    AggregationQueryBuilderType,
    AggregationType,
    GetFeatureMode,
    //control
    TimeFlowControl,
    //iManager
    IManager,
    IManagerServiceBase,
    IManagerCreateNodeParam,
    //iPortal
    IPortal,
    IPortalQueryParam,
    IPortalResource,
    IPortalQueryResult,
    IPortalShareParam,
    IPortalShareEntity,
    IPortalMap,
    IPortalMapsQueryParam,
    IPortalInsight,
    IPortalInsightsQueryParam,
    IPortalScene,
    IPortalScenesQueryParam,
    IPortalService,
    IPortalServiceBase,
    IPortalServicesQueryParam,
    IPortalMapdashboard,
    IPortalMapdashboardsQueryParam,
    //Online
    Online,
    OnlineData,
    OnlineQueryDatasParameter,
    ServiceStatus,
    DataItemType,
    DataItemOrderBy,
    FilterField,
    OnlineServiceBase,
    //security
    KeyServiceParameter,
    SecurityManager,
    ServerInfo,
    TokenServiceParameter,
    //thirdparty
    ElasticSearch,
    //util
    FetchRequest,
    ColorsPickerUtil,
    ArrayStatistic,
    //iServer
    AreaSolarRadiationParameters,
    AggregationParameter,
    AggQueryBuilderParameter,
    BufferAnalystParameters,
    BufferDistance,
    BuffersAnalystJobsParameter,
    BufferSetting,
    BurstPipelineAnalystParameters,
    ChartQueryFilterParameter,
    ChartQueryParameters,
    ClipParameter,
    ColorDictionary,
    ComputeWeightMatrixParameters,
    DataReturnOption,
    DatasetBufferAnalystParameters,
    DatasetInfo,
    DatasetOverlayAnalystParameters,
    DatasetSurfaceAnalystParameters,
    DatasetThiessenAnalystParameters,
    DatasourceConnectionInfo,
    DensityKernelAnalystParameters,
    EditFeaturesParameters,
    FacilityAnalyst3DParameters,
    FacilityAnalystSinks3DParameters,
    FacilityAnalystSources3DParameters,
    FacilityAnalystStreamParameters,
    FacilityAnalystTracedown3DParameters,
    FacilityAnalystTraceup3DParameters,
    FacilityAnalystUpstream3DParameters,
    FieldParameters,
    FilterAggParameter,
    FieldStatisticsParameters,
    FilterParameter,
    FindClosestFacilitiesParameters,
    FindLocationParameters,
    FindMTSPPathsParameters,
    FindPathParameters,
    FindServiceAreasParameters,
    FindTSPPathsParameters,
    GenerateSpatialDataParameters,
    GeoBoundingBoxQueryBuilderParameter,
    GeoCodingParameter,
    GeoDecodingParameter,
    GeoHashGridAggParameter,
    GeometryBufferAnalystParameters,
    GeometryOverlayAnalystParameters,
    GeometrySurfaceAnalystParameters,
    GeometryThiessenAnalystParameters,
    GeoRelationAnalystParameters,
    GetFeaturesByBoundsParameters,
    GetFeaturesByBufferParameters,
    GetFeaturesByGeometryParameters,
    GetFeaturesByIDsParameters,
    GetFeaturesBySQLParameters,
    GetGridCellInfosParameters,
    Grid,
    Image,
    InterpolationAnalystParameters,
    InterpolationIDWAnalystParameters,
    InterpolationKrigingAnalystParameters,
    InterpolationRBFAnalystParameters,
    JoinItem,
    KernelDensityJobParameter,
    LabelImageCell,
    LabelMatrixCell,
    LabelMixedTextStyle,
    LabelSymbolCell,
    LabelThemeCell,
    LayerStatus,
    LinkItem,
    MathExpressionAnalysisParameters,
    MeasureParameters,
    OutputSetting,
    MappingParameters,
    OverlapDisplayedOptions,
    OverlayAnalystParameters,
    OverlayGeoJobParameter,
    PointWithMeasure,
    QueryByBoundsParameters,
    QueryByDistanceParameters,
    QueryByGeometryParameters,
    QueryBySQLParameters,
    QueryParameters,
    Route,
    RouteCalculateMeasureParameters,
    RouteLocatorParameters,
    ServerColor,
    ServerFeature,
    ServerGeometry,
    ServerStyle,
    ServerTextStyle,
    ServerTheme,
    SetLayerInfoParameters,
    SetLayersInfoParameters,
    SetLayerStatusParameters,
    SingleObjectQueryJobsParameter,
    StopQueryParameters,
    SummaryAttributesJobsParameter,
    SummaryMeshJobParameter,
    SummaryRegionJobParameter,
    SupplyCenter,
    SurfaceAnalystParameters,
    SurfaceAnalystParametersSetting,
    TerrainCurvatureCalculationParameters,
    Theme,
    ThemeDotDensity,
    ThemeFlow,
    ThemeGraduatedSymbol,
    ThemeGraduatedSymbolStyle,
    ThemeGraph,
    ThemeGraphAxes,
    ThemeGraphItem,
    ThemeGraphSize,
    ThemeGraphText,
    ThemeGridRange,
    ThemeGridRangeItem,
    ThemeGridUnique,
    ThemeGridUniqueItem,
    ThemeLabel,
    ThemeLabelAlongLine,
    ThemeLabelBackground,
    ThemeLabelItem,
    ThemeLabelText,
    ThemeLabelUniqueItem,
    ThemeMemoryData,
    ThemeOffset,
    ThemeParameters,
    ThemeRange,
    ThemeRangeItem,
    ThemeUnique,
    ThemeUniqueItem,
    ThiessenAnalystParameters,
    TopologyValidatorJobsParameter,
    TransferLine,
    TransferPathParameters,
    TransferSolutionParameters,
    TransportationAnalystParameter,
    TransportationAnalystResultSetting,
    UGCLayer,
    UGCMapLayer,
    UGCSubLayer,
    UpdateEdgeWeightParameters,
    UpdateTurnNodeWeightParameters,
    Vector,
    VectorClipJobsParameter,
    //components
    FileTypes,
    FileConfig,
    FileModel,
    MessageBox,
    CommonContainer,
    DropDownBox,
    Select,
    AttributesPopContainer,
    PopContainer,
    IndexTabsPageContainer,
    CityTabsPage,
    NavTabsPage,
    PaginationContainer,
    ComponentsUtil,
    FileReaderUtil,
    ChartView,
    ChartViewModel
};
export {
    Logo,
    logo,
    ChangeTileVersion,
    changeTileVersion
};
export {
    CommontypesConversion,
    BaiduCRS,
    TianDiTu_WGS84CRS,
    TianDiTu_MercatorCRS,
    NonProjection,
    nonProjection,
    NonEarthCRS,
    nonEarthCRS,
    CRS,
    crs,
    toGeoJSON,
    toSuperMapGeometry,
    getMeterPerMapUnit,
    resolutionToScale,
    scaleToResolution,
    GetResolutionFromScaleDpi,
    NormalizeScale
};
export {
    BaiduTileLayer,
    baiduTileLayer,
    CloudTileLayer,
    cloudTileLayer,
    ImageMapLayer,
    imageMapLayer,
    TiandituTileLayer,
    tiandituTileLayer,
    TiledMapLayer,
    tiledMapLayer,
    WMTSLayer,
    wmtsLayer,
    WebMap,
    webMap
};
export {
    DataFlowLayer,
    dataFlowLayer,
    EchartsLayer,
    echartsLayer,
    LeafletMapCoordSys,
    GraphicLayer,
    graphicLayer,
    GraphThemeLayer,
    graphThemeLayer,
    LabelThemeLayer,
    labelThemeLayer,
    MapVLayer,
    mapVLayer,
    RangeThemeLayer,
    rangeThemeLayer,
    RankSymbolThemeLayer,
    rankSymbolThemeLayer,
    TileVectorLayer,
    tiledVectorLayer,
    TurfLayer,
    turfLayer,
    UnicodeMarker,
    unicodeMarker,
    UniqueThemeLayer,
    uniqueThemeLayer,
    VectorTileFormat,

    CartoCSSToLeaflet,
    DefaultStyle,
    CartoStyleMap,
    ServerStyleMap,
    CompOpMap,

    ImageStyle,
    imageStyle,
    CircleStyle,
    circleStyle,
    Graphic,
    graphic,
    CloverStyle,
    cloverStyle,
    MapVRenderer,
    GeoFeatureThemeLayer,
    ThemeFeature,
    themeFeature,
    ThemeLayer,

    CanvasRenderer,
    LineSymbolizer,
    PointSymbolizer,
    RegionSymbolizer,
    SVGRenderer,
    Symbolizer,
    PolyBase,
    TextSymbolizer,
    VectorFeatureType,
    VectorGrid,
    VectorTile,
    VectorTileJSON,
    VectorTilePBF
};
export {
    AddressMatchService,
    addressMatchService,
    ChartService,
    chartService,
    DataFlowService,
    dataFlowService,
    FeatureService,
    featureService,
    FieldService,
    fieldService,
    GridCellInfosService,
    gridCellInfosService,
    LayerInfoService,
    layerInfoService,
    MapService,
    mapService,
    MeasureService,
    measureService,
    NetworkAnalyst3DService,
    networkAnalyst3DService,
    NetworkAnalystService,
    networkAnalystService,
    ProcessingService,
    processingService,
    QueryService,
    queryService,
    ServiceBase,
    SpatialAnalystService,
    spatialAnalystService,
    ThemeService,
    themeService,
    TrafficTransferAnalystService,
    trafficTransferAnalystService
};