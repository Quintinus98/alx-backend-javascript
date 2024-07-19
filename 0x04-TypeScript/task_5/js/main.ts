export interface MajorCredits {
    credits: number & { __brand: 'MajorCredits.credits'};
}

export interface MinorCredits {
    credits: number & { __brand: 'MinorCredits.credits'};
}

export function sumMajorCredits(subject1:MajorCredits, subject2:MinorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits } as MajorCredits
}

export function sumMinorCredits(subject1:MajorCredits, subject2:MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits } as MinorCredits
}