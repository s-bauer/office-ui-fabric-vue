// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {IIconOptions, IIconSubset, registerIcons} from "@s-bauer/uifabric-styling";

export function initializeIcons(baseUrl: string = "", options?: IIconOptions): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
      fontStyle: "normal",
      fontWeight: "normal",
      speak: "none"
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-8"`,
      src: `url("${baseUrl}fabric-icons-8-58fb017e.woff") format("woff")`
    },
    icons: {
      CRMReport: "\uEFFE",
      KnowledgeArticle: "\uF000",
      Relationship: "\uF003",
      ZipFolder: "\uF012",
      SurveyQuestions: "\uF01B",
      TextDocument: "\uF029",
      TextDocumentShared: "\uF02B",
      PageCheckedOut: "\uF02C",
      SaveAndClose: "\uF038",
      Script: "\uF03A",
      Archive: "\uF03F",
      ActivityFeed: "\uF056",
      EventDate: "\uF059",
      ArrowUpRight: "\uF069",
      CaretRight: "\uF06B",
      SetAction: "\uF071",
      CaretSolidLeft: "\uF08D",
      CaretSolidDown: "\uF08E",
      CaretSolidRight: "\uF08F",
      CaretSolidUp: "\uF090",
      PowerAppsLogo: "\uF091",
      PowerApps2Logo: "\uF092",
      SearchIssue: "\uF09A",
      SearchIssueMirrored: "\uF09B",
      FabricAssetLibrary: "\uF09C",
      FabricDataConnectionLibrary: "\uF09D",
      FabricDocLibrary: "\uF09E",
      FabricFormLibrary: "\uF09F",
      FabricFormLibraryMirrored: "\uF0A0",
      FabricReportLibrary: "\uF0A1",
      FabricReportLibraryMirrored: "\uF0A2",
      FabricPublicFolder: "\uF0A3",
      FabricFolderSearch: "\uF0A4",
      FabricMovetoFolder: "\uF0A5",
      FabricUnsyncFolder: "\uF0A6",
      FabricSyncFolder: "\uF0A7",
      FabricOpenFolderHorizontal: "\uF0A8",
      FabricFolder: "\uF0A9",
      FabricFolderFill: "\uF0AA",
      FabricNewFolder: "\uF0AB",
      FabricPictureLibrary: "\uF0AC",
      AddFavorite: "\uF0C8",
      AddFavoriteFill: "\uF0C9",
      BufferTimeBefore: "\uF0CF",
      BufferTimeAfter: "\uF0D0",
      BufferTimeBoth: "\uF0D1",
      PublishContent: "\uF0D4",
      CannedChat: "\uF0F2",
      SkypeForBusinessLogo: "\uF0FC",
      TabCenter: "\uF100",
      PageCheckedin: "\uF104",
      PageList: "\uF106",
      ReadOutLoud: "\uF112",
      CaretBottomLeftSolid8: "\uF121",
      CaretBottomRightSolid8: "\uF122",
      FolderHorizontal: "\uF12B",
      MicrosoftStaffhubLogo: "\uF130",
      GiftboxOpen: "\uF133",
      StatusCircleOuter: "\uF136",
      StatusCircleInner: "\uF137",
      StatusCircleRing: "\uF138",
      StatusTriangleOuter: "\uF139",
      StatusTriangleInner: "\uF13A",
      StatusTriangleExclamation: "\uF13B",
      StatusCircleExclamation: "\uF13C",
      StatusCircleErrorX: "\uF13D",
      StatusCircleInfo: "\uF13F",
      StatusCircleBlock: "\uF140",
      StatusCircleBlock2: "\uF141",
      StatusCircleQuestionMark: "\uF142",
      StatusCircleSync: "\uF143",
      Toll: "\uF160",
      ExploreContentSingle: "\uF164",
      CollapseContent: "\uF165",
      CollapseContentSingle: "\uF166",
      InfoSolid: "\uF167",
      ProgressRingDots: "\uF16A",
      CaloriesAdd: "\uF172",
      BranchFork: "\uF173",
      MobileReport: "\uF18A",
      ScaleVolume: "\uF18C",
      HardDriveGroup: "\uF18F",
      FastMode: "\uF19A",
      ToggleLeft: "\uF19E",
      ToggleRight: "\uF19F",
      TriangleShape: "\uF1A7",
      RectangleShape: "\uF1A9",
      Trophy2: "\uF1AE",
      BucketColor: "\uF1B6",
      BucketColorFill: "\uF1B7",
      Taskboard: "\uF1C2",
      SingleColumn: "\uF1D3",
      DoubleColumn: "\uF1D4",
      TripleColumn: "\uF1D5",
      ColumnLeftTwoThirds: "\uF1D6",
      ColumnRightTwoThirds: "\uF1D7",
      AccessLogoFill: "\uF1DB",
      AnalyticsLogo: "\uF1DE",
      AnalyticsQuery: "\uF1DF",
      NewAnalyticsQuery: "\uF1E0"
    }
  };

  registerIcons(subset, options);
}