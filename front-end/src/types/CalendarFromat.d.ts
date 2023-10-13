declare type ThemesFormat = "BLUE" | "GREEN" | "PURPLE" | "ORANGE" | "PINK" | "MORE";
declare interface CalendarFormat {
    title: string;
    theme: ThemesFormat;
    startTime?: moment.Moment;
    endTime?: moment.Moment;
}
